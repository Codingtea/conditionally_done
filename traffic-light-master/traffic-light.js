
function allLightsOff(){
    var lights = document.querySelectorAll('.light');
    for (var i = 0; i < lights.length; i++) {
        var light = lights[i];
        light.classList.remove('on');
    }

      // document.querySelectorAll('.light').forEach(function(light){
      //   light.classList.remove('on');
      // });

}

function switchOn(className){
  allLightsOff();
  var redLight = document.querySelector(className);
  redLight.classList.add('on');
}

function go(){
  switchOn('.go');
}

function stop(){
  switchOn('.stop');
}

function caution(){
  switchOn('.caution');
}

function captureTimeChange(cb){
  var timeLeft = document.querySelector("#timeLeft");
  var number = document.querySelector("#number");

  console.log(timeLeft);

  timeLeft.addEventListener("keyup", function(evt){
      var num = Number(evt.target.value);
      number.innerHTML = num;
    setTimeout(function(){
      cb(num);
    }, 0)
  });
}




var counter = 60;
setInterval(function(){
  counter--;
  if (counter > 40){
    stop();
  }
  else if (counter < 40 && counter > 20){
    go();
  }
  else{
    carefull();
  }
  if (counter === 0){
    counter = 60;
  }
}, 500);


/*
Challenge

Can you make the light change automatically? You can use the setInterval function.
Open set-interval.html in a browser, you should see a number incrementing.
Add logic in the interval function to make the counter reset to 0 once it reach 60.
 How do you integrate this into your traffic light to make it change color automatically.
*/
