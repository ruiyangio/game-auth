const util = require('../util');
const User = require('../model/User');

function _getUserPayLoad(user) {
  const fieldsMap = {
    _id: 'id',
    username: 'username',
    createDateTime: 'createDateTime',
    lastModifiedDateTime: 'lastModifiedDateTime'
  };

  return Object.keys(fieldsMap).reduce((res, key) => {
    res[fieldsMap[key]] = user[key];
    return res;
  }, {});
}

function getUser(obj, args, context) {
  if (!obj.username) {
    throw new Error('username can not be null');
  }

  return User.findOne({ username: obj.username })
    .then(user => {
      return _getUserPayLoad(user);
    })
    .catch(error => {
      throw new Error('Failed to find user');
    });
}

function getUsers(obj, args, context) {
  return User.find({})
    .then(users => {
      return users.map(user => {
        return _getUserPayLoad(user);
      });
    })
    .catch(error => {
      throw new Error('Failed to list users');
    });
}

function createUser(obj, args, context) {
  return User.create(obj)
    .then(user => {
      return _getUserPayLoad(user);
    })
    .catch(error => {
      if (error && error.code === 11000) {
        throw new Error(`The username ${obj.username} exists`);
      }
    });
}

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  createUser: createUser
};