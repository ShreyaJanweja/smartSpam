const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Placeholder: accept text and return a placeholder response structure (no predictions)
  res.json({ message: 'predict endpoint placeholder' });
});

module.exports = router;
