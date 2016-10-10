
const assert = require('assert');

var transportFee = function (shift) {

  if (shift.startsWith('morning')) {

    return 'R20';

  }
  else if (shift.startsWith('afternoon')) {

    return 'R10';
  }
  else

  {return 'freebee';
}

};

//
// transportFee (('morning'),R20);
// transportFee (('afternoon'),R10);

assert.equal(transportFee ('morning'),'R20');
assert.equal(transportFee ('afternoon'),'R10');
