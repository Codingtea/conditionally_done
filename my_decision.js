// my program will determine transportation from home to Codex.

// if I take wake up at 4am ==== then if I take a bus at 5:30 I'll arrive at Codex at am

//if I leave home to get a taxi at 5;30 i'll get robbed

// If I want to take a taxi from from to6 the bus stop I'll have to wait till 6m

// If I

var bus =('8am');
var taxi = ('6am');

var travellingMethod = function (alarm){

    if (alarm === '6am')
    {console.log(bus)}


        else if  (alarm === '8am')
        { console.log(taxi)}


          else
          {console.log('you will be late')}

                                        };

  var alarm = travellingMethod('8am');
  console.log (alarm + "Dont be late,dude!");
 
