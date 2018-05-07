const crypto = require('crypto');
const constants = require('../constants');

// Password utils
function getSha512Hash(password, salt) {
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
}

function saltHashPassword(password) {
  const salt = crypto
    .randomBytes(8)
    .toString('hex')
    .substring(0, 16);
  return {
    salt: salt,
    hash: getSha512Hash(password, salt)
  };
}

function verifyPasswordHash(hashedPassword, password, salt) {
  return getSha512Hash(password, salt) === hashedPassword;
}

// Additional Object utils
function deepCopyObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function lowerObjectKeys(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    map[key.toLowerCase] = obj[key];
    return map;
  }, {});
}

// Set response content type
function sendJsonResponse(res, statusCode, playLoad) {
  res.contentType = constants.CONTENT_TYPE_JSON;
  res.status = statusCode;
  res.send(payLoad);
}

modules.export = {
  getSha512Hash: getSha512Hash,
  saltHashPassword: saltHashPassword,
  verifyPasswordHash: verifyPasswordHash,
  deepCopyObject: deepCopyObject
};
