const debug = require('debug');
const jwt = require('jsonwebtoken');
const constants = require('../constants');
const gameConf = require(constants.GAME_CONF);

// Private methods
function extractBearerToken(tokenString) {
  const tokenRegPattern = `^${constants.auth.bearer}\\s+(.*)$`;
  const tokenReg = new RegExp(tokenRegPattern, 'g');
  const matches = tokenReg.exec(tokenString);
  if (matches !== null && matches.length != 0) {
    return matches[1];
  }
}

function decryptUser(token) {
  try {
    const decryptedUser = jwt.verify(token, config.jwtSecret, {
      maxAge: config.tokenExp
    });
    return decryptedUser.data;
  } catch (err) {
    debug(err.message);
    if (err.name === 'TokenExpiredError') {
      const expiredUserInfo = jwt.decode(token);
      if (expiredUserInfo) {
        let expiredUser = expiredUserInfo.data;
        expiredUser.expired = true;
        return expiredUser;
      }
    }
    return null;
  }
}
