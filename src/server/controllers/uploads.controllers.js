const { response } = require("express");
const { uploadFile } = require('../../helpers');
const { User, Product } = require('../../models');

const loadFile = async(req = request, res = response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).json({ 
            status: 400, 
            msg: 'No files were uploaded'
        });
    }

    try {
        const filename = await uploadFile(req.files, [ 'txt', 'gif', 'jpeg', 'png' ], 'users');
    
        return res.status(200).json({
            status: 200,
            filename,
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            error,
        });
    }
}

const associateFileToCollection = async(req = request, res = response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).json({ 
            status: 400, 
            msg: 'No files were uploaded'
        });
    }

    const { collection, id } = req.params;

    let model;

    switch (collection) {
        case 'products':
            model = await Product.findById(id);

            if (!model) {
                return res.status(400).json({
                    status: 400,
                    msg: `There is no product with id ${id}`
                });
            }

            break;
        case 'users':
            model = await User.findById(id);

            if (!model) {
                return res.status(400).json({
                    status: 400,
                    msg: `There is no user with id ${id}`
                });
            }

            break;
    
        default:
            return  res.status(500).json({
                status: 500,
                msg: 'Can not change image for this collection and id'
            });
    }

    try {
        const filename = await uploadFile(req.files, [ 'txt', 'gif', 'jpeg', 'png' ], collection);
    
        model.img = filename;

        await model.save();

        return res.status(200).json({
            status: 200,
            model,
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            error,
        });
    }
}

module.exports = {
    associateFileToCollection,
    loadFile,
}