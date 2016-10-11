//try this in lunchWhere.js
var lunchWhere = function(bankBalance){
    if (bankBalance > 4500 ){
        return "Go and get KFC!"
    }
    else if (bankBalance < 4500 && bankBalance > 1500){
        return "Go to PnP!"
    }
    else{
        return "Two minute noodles today!";
    }
};
var eat = lunchWhere(5000);


console.log(eat);

//
//
var animals = function (a,b,c){

if (a > 7 && b < 9 || c > 90)

{return "monkeys"}

  else   (a >9 && b <9 || c > 90)
    {return"cats"}

    //if a is greater than 9 and b less than 9
    //    OR
    // c is greater than 90
    //DO THIS!!
}
var farm = animals();
console.log(farm);
