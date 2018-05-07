const util = require('../util');
const User = require('../models/User');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  createUser() {
    const self = this;
    const body = util.lowerObjectKeys(util.deepCopyObject(this.req.body));

    User.create(body)
      .then(user => {
        console.log(user);
        util.sendJsonResponse(self.res, 200, user);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

module.exports = UserController;
