const Role = require('../models/role');

const isValidRole = async(name = '') => {
    const roleExists = await Role.findOne({ name })

    if (!roleExists) {
        throw new Error(`Role '${name}' is not registered in the database`);
    }
}

module.exports = {
    isValidRole
}