const { response, request } = require('express');
const Role = require('../models/role');

const isAdminRole = (req = request, res = response, next) => {
    if (!req.user) {
        console.log(`isAdminRole - You must invoke the "validateJWT" middleware first`);

        return res.status(500).json({
            status: 500,
            msg: 'Contact the Administrator for more information'
        });
    }

    const { role = '', name } = req.user;

    if (role.toUpperCase() !== "ADMIN") {
        return res.status(401).json({
            status: 401,
            msg: `'The user ${name} does not have the required role`
        });
    }

    next();
}

const hasRole = ( ... roles ) => {
    return (req = request, res = response, next) => {
        if (!req.user) {
            console.log(`hasRole - You must invoke the "validateJWT" middleware first`);
    
            return res.status(500).json({
                status: 500,
                msg: 'Contact the Administrator for more information'
            });
        }

        if (!roles.includes(req.user.role.toUpperCase())) {
            return res.status(401).json({
                status: 401,
                msg: `This service require one of these roles "${roles}"`
            });
        }
        
        next();
    }
}

module.exports = {
    isAdminRole,
    hasRole, 
}