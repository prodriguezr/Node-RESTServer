const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async(name = '') => {
    const exists = await Role.findOne({ name });

    if (!exists) {
        throw new Error(`Role '${name}' is not registered in database`);
    }
}

const existsEmail = async(email = '') => {
    const exists = await User.findOne({ email });

    if (exists) {
        throw new Error(`Email '${email}' already registered in database`);
    }
}

module.exports = {
    isValidRole,
    existsEmail
}