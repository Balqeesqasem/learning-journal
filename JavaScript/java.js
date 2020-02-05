var pay = Number ;
var greeting; 
 var pay = prompt ("How much do you want to spend")
 
function creatGreeting(pay) {

    if (pay < 50) 
    {
         greeting = 'You can find many ideas for this amount. Enjoy buying our balloons!';
        } 
    else if(pay > 50)
    { greeting = 'That is a high budget , seems that what you are preparing for will be a wonderful thing with our balloons!';
   
    }
    else
    { greeting = 'Something went wrong!';
   
    } 
    return greeting;

 }

 //.write('<h3>' + creatGreeting(pay) + '</h3>'); call the function in html nit here undr javascript called.