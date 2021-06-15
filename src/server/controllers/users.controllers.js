const { request, response } = require('express');
const User = require('../../models/user');
const bcryptjs = require('bcryptjs');

const getUsers = (req = request, res = response) => {
    const query = req.query;

    res.json({ 
        msg: "GET method",
        query,
    });
}

const postUsers = async(req = request, res = response) => {
    try {
        const { name, email, password, role } = req.body;
        
        const user = new User({ name, email, password, role });

        // Generate crypt password
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(user.password, salt);

        await user.save();
        
        return res.status(200).json({
            user,
        });
    } catch (err) {
        console.log(err);
        
        res.status(500).json({
            msg: "Error in user POST method",
        });
    }
}

const putUsers = async(req = request, res = response) => {
    const { userId } = req.params;

    const { _id, password, google, status, email, ... rest } = req.body;

    if (password) {
        // Generate crypt password
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(userId, rest);

    res.status(200).json({
        user,
    });
}

const delUsers = (req = request, res = response) => {
    res.status(501).json({ msg: "User DELETE method"});
} 

const patUsers = (req = request, res = response) => {
    res.status(501).json({ msg: "User PATCH method"});
} 

module.exports = { getUsers, postUsers, putUsers, delUsers, patUsers }