const { Router } = require('express');
const { getUsers, postUsers, putUsers, patUsers, delUsers } = require('../controllers/users.controllers');

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/:userId', putUsers);

router.delete('/:id', delUsers);  

router.patch('/:id', patUsers);  

module.exports = router;