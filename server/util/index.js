const crypto = require('crypto');

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

modules.export = {
  getSha512Hash: getSha512Hash,
  saltHashPassword: saltHashPassword,
  verifyPasswordHash: verifyPasswordHash
};
