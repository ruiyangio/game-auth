const express = require('express');
const router = express.Router();

router.post('/auth/token', (req, res) => {
  res.contentType = 'application/json';
  res.send({ message: 'Test Docker' });
});

module.exports = router;
