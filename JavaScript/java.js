var pay = Number ;
var greeting; 
 var pay = prompt ("How much do you want to spend")
 if (pay < 50) { greeting = 'You can find many ideas for this amount. Enjoy buying our balloons!'; } 
 else if(pay > 50){ greeting = 'That is a high budget , seems that what you are preparing for will be a wonderful thing with our balloons!';
 }
 else { greeting = 'Somethingwentwrong!';
 } 
 document.write('<h3>' + greeting + '</h3>');