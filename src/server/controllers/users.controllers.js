const { request, response } = require('express');
const User = require('../../models/user');

const getUsers = (req = request, res = response) => {
    const query = req.query;

    res.json({ 
        msg: "GET method",
        query,
    });
}

const postUsers = async(req = request, res = response) => {
    const { name, email, password, role } = req.body;
    
    const user = new User({ name, email, password, role });

    // res.status(200).json({
    //     msg: "User POST method",
    //     name,
    //     email,
    //     password, 
    //     google, 
    //     img, 
    //     role,
    //     status
    // });

    await user.save();

    res.status(200).json({
        msg: "User POST method",
        user,
    });
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