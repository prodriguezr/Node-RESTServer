const { Router } = require('express');
const { check } = require('express-validator');
const { isValidRole, existsRoleById, existsRoleByName } = require('../../helpers/db-role-validators');
const { validateFields } = require('../../middlewares/validate-fields');
const { getRoles, postRole, putRole, patRole, delRole } = require('../controllers/roles.controllers');

const router = Router();

router.get('/', getRoles);

router.post('/', [
    check('name', 'Name field is required').not().isEmpty().custom(existsRoleByName),
    validateFields,
], postRole);

router.put('/:roleId', [
    check('roleId', 'MongoId is invalid').isMongoId().custom(existsRoleById),
    check('name', 'Name is required').not().isEmpty(),
    validateFields,
], putRole);

router.delete('/:roleId', [
    check('roleId', 'MongoId is invalid').isMongoId().custom(existsRoleById),
    validateFields,
], delRole);  

router.patch('/:id', patRole);  

module.exports = router;