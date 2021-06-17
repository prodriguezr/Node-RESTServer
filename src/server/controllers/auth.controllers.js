const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../../models/user');
const { generateJWT } = require('../../helpers/jwt/utils');

const login = async(req = request, res = response) => {
    const { email, password } = req.body;

    const queryUser = {
        email, 
        status: true
    }

    try {
        const user = await User.findOne(queryUser);

        if (!user) {
            return res.status(400).json({
                status: 400,
                msg: 'Email or password are invalid'
            });
        }

        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                status: 400,
                msg: 'Email or password are invalid'
            });
        }

        const token = await generateJWT(user.id);

        console.log(token);

        res.json({
            user,
            token,
         });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'An error has occurred, contact the Administrator for more information'
        });
    }
}

module.exports = {
    login,
}