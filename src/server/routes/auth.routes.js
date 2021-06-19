const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../../middlewares/validate-fields');
const { login, googleSignIn } = require('../controllers/auth.controllers');

const router = Router();

router.post('/login', [
    check('email', 'Email is required')
        .isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields,    
], login);

router.post('/google', [
    check('id_token', 'id_token is required').not().isEmpty(),
    validateFields,    
], googleSignIn);

module.exports = router;