const util = require('../util');
const User = require('../model/User');
const HttpStatus = require('http-status-codes');

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

class UserController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  createUser() {
    const self = this;
    const body = util.lowerObjectKeys(self.req.body);

    User.create(body)
      .then(user => {
        util.sendJsonResponse(self.res, HttpStatus.OK, _getUserPayLoad(user));
      })
      .catch(error => {
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        let errorMessage = 'Failed to create user';

        if (error && error.code === 11000) {
          statusCode = HttpStatus.CONFLICT;
          errorMessage = `The username ${body.username} exists`;
        }

        util.sendJsonResponse(self.res, statusCode, {
          message: errorMessage
        });
      });
  }
}

module.exports = UserController;
