const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, postUsers, putUsers, patUsers, delUsers } = require('../controllers/users.controllers');

const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name', 'Name field is required').not().isEmpty(),
    check('password', 'The password field is required and must contain at least 6 characters').isLength({ min: 6 }),
    check('email', 'Email field is invalid').isEmail(),
    check('role', 'Value is not supported').isIn(['ADMIN', 'USER'])
], postUsers);

router.put('/:userId', putUsers);

router.delete('/:id', delUsers);  

router.patch('/:id', patUsers);  

module.exports = router;