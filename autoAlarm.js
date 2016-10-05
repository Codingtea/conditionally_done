var autoAlarm = function (tomorrow){

  if (tomorrow.startsWith("Sa")&& tomorrow.endsWith("day")) {

          return ("8:am")
            }

            else if (tomorrow.startsWith("Su")&& tomorrow.endsWith("day")){

              return ("5:am")}

              else {

                return ("7:am")
              }


};

var wake =  autoAlarm("Sunday");
console.log(wake);
