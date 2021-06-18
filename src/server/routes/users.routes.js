const { Router } = require('express');
const { check } = require('express-validator');
const { isValidRole, existsEmail, existsUserById } = require('../../helpers/db/user-validators');
const { validateFields } = require('../../middlewares/validate-fields');
const { validateJWT } = require('../../middlewares/validate-jwt');
const { getUsers, postUsers, putUsers, patUsers, delUsers } = require('../controllers/users.controllers');

const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name', 'Name field is required').not().isEmpty(),
    check('password', 'The password field is required and must contain at least 6 characters').isLength({ min: 6 }),
    check('email', 'Email field is invalid').isEmail().custom(existsEmail),
    check('role').custom(isValidRole),
    validateFields,
], postUsers);

router.put('/:userId', [
    check('userId', 'MongoId is invalid').isMongoId().custom(existsUserById),
    check('role').custom(isValidRole),
    validateFields,
], putUsers);

router.delete('/:userId', [
    validateJWT,
    check('userId', 'MongoId is invalid').isMongoId().custom(existsUserById),
    validateFields,
], delUsers);  

router.patch('/:id', patUsers);  

module.exports = router;