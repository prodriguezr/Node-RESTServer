const { Router, response, request } = require('express');
const { check } = require('express-validator');
const { validateFields, validateJWT } = require('../../middlewares');
const { CategoriesCtrl } = require('../controllers');

const router = Router();

// Get all categories - public
router.get('/', CategoriesCtrl.getCategories);

// Get category by id - public
router.get('/:id', CategoriesCtrl.getCategories);

// Create category - Private - Any person with a valid token
router.post('/', [ 
    validateJWT,
    check('name', 'Name is required').not().isEmpty(), 
    validateFields,
], CategoriesCtrl.createCategory);

// Modify category - Private - Any person with a valid token
router.put('/:categoryId', (req = request, res = response) => {
    res.json({ msg: 'PUT method' });
});

// Delete a category - Only users with ADMIN role
router.delete('/:categoryId', (req = request, res = response) => {
    res.json({ msg: 'DELETE method'});
});

module.exports = router;