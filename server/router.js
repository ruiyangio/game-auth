const express = require('express');
const router = express.Router();
const UserController = require('./controller/UserController');

router.post('/api/token', (req, res) => {
  res.send({ message: 'Test Docker' });
});

router.post('/api/user', (req, res) => {
  const userController = new UserController(req, req);
  userController.createUser();
});

module.exports = router;
