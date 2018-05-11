const util = require('../util');
const User = require('../model/User');

function _getUserPayLoad(user) {
  return ['_id', 'username', 'createDateTime', 'lastModifiedDateTime'].reduce(
    (res, key) => {
      res[key] = user[key];
      return res;
    },
    {}
  );
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
        util.sendJsonResponse(self.res, 200, _getUserPayLoad(user));
      })
      .catch(error => {
        util.sendJsonResponse(self.res, 500, {
          message: 'Failed to create user'
        });
      });
  }
}

module.exports = UserController;
