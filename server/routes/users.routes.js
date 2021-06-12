const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({ msg: "GET method"});
});

router.post('/', (req, res) => {
    res.status(501).json({ msg: "POST method"});
});

router.put('/', (req, res) => {
    res.status(501).json({ msg: "PUT method"});
});

router.delete('/', (req, res) => {
    res.status(501).json({ msg: "DELETE method"});
});  

module.exports = router;