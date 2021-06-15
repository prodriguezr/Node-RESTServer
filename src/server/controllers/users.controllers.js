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
        
        // Check if email exists
        const emailExists = await User.findOne({ email });
        
        if (emailExists) {
            return res.status(400).json({
                msg: "The user with that email already exists",
            });
        }
        
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

const putUsers = (req = request, res = response) => {
    const { userId } = req.params;
    res.status(200).json({
        msg: "User PUT method",
        userId,
    });
}

const delUsers = (req = request, res = response) => {
    res.status(501).json({ msg: "User DELETE method"});
} 

const patUsers = (req = request, res = response) => {
    res.status(501).json({ msg: "User PATCH method"});
} 

module.exports = { getUsers, postUsers, putUsers, delUsers, patUsers }