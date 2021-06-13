const { request, response } = require('express');

const getUsers = (req = request, res = response) => {
    const query = req.query;

    res.json({ 
        msg: "GET method",
        query,
    });
}

const postUsers = (req = request, res = response) => {
    const { name, age } = req.body;

    res.status(200).json({
        msg: "User POST method",
        name,
        age,
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