const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    status: {
        type: Boolean,
        default: true,
        required: true,
    },
});

module.exports = model('Role', RoleSchema);