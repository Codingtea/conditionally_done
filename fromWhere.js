
const assert = require('assert');

var fromWhere = function (regNum) {

if (regNum.startsWith('CY'))
{ return 'Bellville'}

  else if ( regNum.startsWith('CJ'))   {
    return 'Paarl'
    }
    else if (regNum.startsWith('CA')){
      return 'CapeTown'
    }
    else { return 'Some Other place'}


};

fromWhere('CJ 533 876');
fromWhere('CA 456 321');
fromWhere('CY 654 432');
assert.equal(fromWhere ('CJ 533 876'), 'Paarl');

assert.equal(fromWhere ('CA 456 321'),'CapeTown');

assert.equal(fromWhere ('CY 654 432'),'Bellville');
