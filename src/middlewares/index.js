const validateFields = require('./validate-fields');
const validateJWT = require('./validate-jwt');
const validateRoles = require('./validate-roles');
const validateJSON = require('./validate-json');

module.exports = {
    ... validateFields,
    ... validateJWT,
    ... validateRoles,
    ... validateJSON,
}