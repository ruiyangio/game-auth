const express = require('express');
const router = express.Router();

router.post('/api/token', (req, res) => {
  res.send({ message: 'Test Docker' });
});

router.post('/api/user', (req, res) => {
  res.send({});
});

module.exports = router;
