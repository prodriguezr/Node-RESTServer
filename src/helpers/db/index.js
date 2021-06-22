const AuthVal = require('./auth-validators');
const CategoryVal = require('./category-validators');
const RoleVal = require('./role-validators');
const UserVal = require('./user-validators');

module.exports = {
    ... AuthVal,
    ... CategoryVal,
    ... RoleVal,
    ... UserVal,
}