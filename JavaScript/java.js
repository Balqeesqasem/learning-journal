var today = new Date(); 
var pay = today.getpay();
 var greeting; 
 var pay = prompt ("How much to pay")

 if (pay < 50) {greeting = 'There are many balloons that you can buy for less than $ 50. Enjoy our shopping' } 
 else if(pay > 50){ greeting = 'This is a high budget , seems that what you are preparing for will be a wonderful thing with our balloons!';
 } 
 else { greeting = 'Somethingwentwrong!';
 } 
 document.write('<h3>' + greeting + '</h3>');