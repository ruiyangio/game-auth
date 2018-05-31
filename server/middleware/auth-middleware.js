const path = require('path');
const constants = require('../constants');

module.exports = function authMiddleware(req, res, next) {
  if (!req.url.match(/^\/graphql/g)) {
    res.contentType = constants.CONTENT_TYPE_HTML;
    res.sendFile(path.join(process.cwd(), '/dashboard/build/index.html'));
  }

  next();
};
