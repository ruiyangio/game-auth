const util = require('../util');
const User = require('../model/User');

class UserController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  createUser() {
    const self = this;
    const body = util.lowerObjectKeys(util.deepCopyObject(self.req.body));

    User.create(body)
      .then(user => {
        util.sendJsonResponse(self.res, 200, user);
      })
      .catch(error => {
        util.sendJsonResponse(self.res, 500, {
          message: 'Failed to create user'
        });
      });
  }
}

module.exports = UserController;
