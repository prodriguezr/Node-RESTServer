const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {
    const token = req.header('x-keyapp');

    if (!token) {
        return res.status(401).json({
            status: 401,
            msg: 'Token not found in request'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET);

        req.uid = uid;

        next();        
    } catch (err) {
        console.log(err);
        res.status(401).json({
            status: 401,
            msg: 'Invalid token'
        });
    }
}

module.exports = {
    validateJWT
}