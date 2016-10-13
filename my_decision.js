// function functionName() {
//
//
// var bus = '6am';
// var taxi = '7am';
// // var travellingMethod = function (bus,taxi)
//
//
//     if (alarm === '6am')
//     console.log('6am')
//     {return bus}
//
//
//      else if
//       (alarm === '8am')
//         console.log('8am')
//         { return taxi}
//
//
//           else if
//           {return'you will be late'}
//
//                                         };
// var Bus = '6am'
// var taxi = '8am'

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
