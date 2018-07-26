const {
  getUser,
  getUsers,
  updateUser
} = require('../controller/userController');

module.exports = {
  user: getUser,
  users: getUsers,
  updateUser: updateUser
};
