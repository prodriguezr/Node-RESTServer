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
    google: {
        type: Boolean,
        default: false,
    },
    img: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        default: 'USER',
        enum: {
            values: ['ADMIN', 'USER'],
            message: '{VALUE} is not supported'
        }
      
    },
    status: {
        type: Boolean,
        default: true,
        required: true,
    },
});

UserSchema.methods.toJSON = function() {
    const { __v, _id, password, status, google, ... user } = this.toObject();

    user.uid = _id;

    return user;
}

module.exports = model('User', UserSchema);