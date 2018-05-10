const assert = require('chai').assert;
const util = require('./index');

describe('Test Password utils', () => {
  it('TestPasswordHasingWithSalt', () => {
    const pwd = '12345';
    const salt = '@xaodq1sd';
    const expectedHash =
      '054abdfe42a00d8c2d151693745b64f22c93a77dfa51786223f35f38f342dec24e4e4056e0e2975f406ed21ab2562ef951dbcc37faca3d5a5add81c5ca81b58e';
    assert.equal(
      util.getSha512Hash(pwd, salt),
      expectedHash,
      'Password is correctly hashed'
    );
  });
});
