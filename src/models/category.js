const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
     name: {
         type: String,
         required: [true, 'Name is required'],
     },
     user: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         required: true,
     },
     status: {
         type: Boolean,
         required: true,
         default: true,
     },
     created: {
        type: Date,
        default: Date.now,
        required: [true, 'Created date is required'], 
    },
    updated: {
        type: Date,
        default: undefined,
        required: false, 
    },
    deleted: {
        type: Date,
        default: undefined,
        required: false, 
    },
});

module.exports = model('Category', CategorySchema);