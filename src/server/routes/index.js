const Users = require('./users.routes');
const Categories = require('./categories.routes');
const Auth = require('./auth.routes');
const Roles = require('./roles.routes');

module.exports = {
    Auth,
    Categories,
    Roles,
    Users,
}