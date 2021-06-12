const { response } = require('express');

const getUsers = (req, res = response) => {
    res.json({ msg: "GET method"});
}

const postUsers = (req, res = response) => {
    res.status(501).json({ msg: "User POST method"});
}

const putUsers = (req, res = response) => {
    res.status(501).json({ msg: "User PUT method"});
}

const delUsers = (req, res = response) => {
    res.status(501).json({ msg: "User DELETE method"});
} 

const patUsers = (req, res = response) => {
    res.status(501).json({ msg: "User PATCH method"});
} 

module.exports = { getUsers, postUsers, putUsers, delUsers, patUsers }