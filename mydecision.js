

var travellingMethod = function(bus, taxi) {

  if (bus === '6am') {
    return 'take a bus';
  }
   if (taxi === '8am') {
    return 'take a taxi';
  } else {
    return 'you are going to be late';
  }

}



var choice = travellingMethod('5am', '8am');
console.log(choice);
