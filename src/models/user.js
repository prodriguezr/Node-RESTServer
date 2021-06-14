const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: {
            values: ['ADMIN', 'USER'],
            message: '{VALUE} is not supported'
        }
      
    },
    google: {
        type: Boolean,
        default: true,
    },
    status: {
        type: Boolean,
        default: true,
        required: true,
    },
});

module.exports = model('User', UserSchema);