const {
  getUser,
  getUsers,
  createUser
} = require('../controller/userController');

module.exports = {
  user: getUser,
  users: getUsers,
  createUser: createUser
};
