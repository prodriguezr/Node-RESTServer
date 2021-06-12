const { Router } = require('express');
const { getUsers, postUsers, putUsers, patUsers, delUsers } = require('../controllers/users.controllers');

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/', putUsers);

router.delete('/', delUsers);  

router.patch('/', patUsers);  

module.exports = router;