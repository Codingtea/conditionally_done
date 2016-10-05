
var todaysDate = new Date();
var currentDay =todaysDate.getDay();
console.log(currentDay);

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(days);
var weekOrWeekend = function (){

  if (currentDay === days [1]){
    return 'week'
  }
  if (currentDay === days [2]){
    return 'week'
  }

  if (currentDay === days [3]){
    return 'week'
  }

  if (currentDay === days [4]){
    return 'week'
  }

  if (currentDay === days [5]){
    return 'week'
  }

 else {
  return 'weekend'
}

};


w


/*
const assert = require('assert');

var weekOrWeekend = function (day){

  if (getDay === 'week');


  {  return 'week'}

    else if () {var getDay = day.split('week');
console.log(getDay);


    } {
      return 'weekend'
    }
  };

   assert.equal(weekOrWeekend('Wednesday'), 'week');
 assert.equal(weekOrWeekend('Sunday'), 'weekend');


/*var lunchWhere = function(bankBalance){
    if (bankBalance > 4500 ){
        return "Go and get KFC!"
    }
    else if (bankBalance < 4500 && bankBalance > 1500){
        return "Go to PnP!"
    }
    else{
        return "Two minute noodles today!";
    }
};*/
