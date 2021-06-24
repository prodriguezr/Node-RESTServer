const { Router } = require('express');
const { check } = require('express-validator');
const { isAllowedCollection } = require('../../helpers');

const { validateFields } = require('../../middlewares');
const { UploadCtrl } = require('../controllers');

const router = Router();

router.post('/', UploadCtrl.loadFile);

router.put('/:collection/:id', [
    check('id', 'Invalid MongoId').isMongoId(),
    check('collection').custom(c => isAllowedCollection(c, ['users', 'products'])),
    validateFields,
], UploadCtrl.associateFileToCollection);

module.exports = router;