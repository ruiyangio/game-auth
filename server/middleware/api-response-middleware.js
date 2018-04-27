const constants = require('../constants');
const AUTH_API_PREFIX_REG = new RegExp(/^\/api\/.*/);

module.exports = function apiResponseMiddleware(req, res, next) {
  if (AUTH_API_PREFIX_REG.test(req.url)) {
    res.contentType = constants.CONTENT_TYPE_JSON;
  }

  next();
};
