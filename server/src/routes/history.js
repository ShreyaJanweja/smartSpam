const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'history placeholder' }));

module.exports = router;
