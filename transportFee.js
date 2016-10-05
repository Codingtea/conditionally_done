
const assert = require('assert');

var transportFee = function (cost) {

  if (cost.startsWith('morning')) {

    return R20

  }
  else if (cost.startsWith('afternoon')) {

    return R10
  }
  else

  {return 'freebee'}

};


transportFee (('morning'),R20);
transportFee (('afternoon'),R10);
transportFee (('nightshift'),R0);
assert.equal(transportFee ('morning'),R20);
assert.equal(transportFee ('afternoon'),R10);
assert.equal(transportFee('nightshift'),'freebee');
