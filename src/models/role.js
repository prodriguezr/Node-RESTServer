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

RoleSchema.methods.toJSON = function() {
    const { __v, status, _id, ... role } = this.toObject();

    return role;
}

module.exports = model('Role', RoleSchema);