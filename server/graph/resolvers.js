const {
  getUser,
  getUsers,
  updateUser,
  createUser
} = require('../controller/userController');

module.exports = {
  user: getUser,
  users: getUsers,
  updateUser: updateUser,
  createUser: createUser
};
