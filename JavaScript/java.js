var pay = Number;
var greeting;
var pay = prompt("How much do you want to spend");

function creatGreeting(pay) {

    if (pay < 50) {
        greeting = 'You can find many ideas for this amount. Enjoy buying our balloons!';
    }
    else if (pay > 50) {
        greeting = 'That is a high budget , seems that what you are preparing for will be a wonderful thing with our balloons!';

    }
    else {
        greeting = 'Something went wrong!';

    }
    return greeting;

}

//.write('<h3>' + creatGreeting(pay) + '</h3>'); call the function in html nit here undr javascript called.

function showImg() {
    var image = prompt("What do you want Graduation or Birthday Ballons?")
    var item = "";

    while (image !== 'Graduation' && image !== 'Birthday') {
        var image = prompt("What do you want Graduation or Birthday Ballons?")
    }
    var numberOfOrder = prompt("how many order you want?")
    console.log(numberOfOrder);
    for (var i = 0; i < numberOfOrder; i++) {

        if (image === "Graduation") {

         item = item + '<img src="ss.jpg" alt="">';
            /*var elements = document.createElement('img');
        elements.setAttribute('src','f.jpg');
        var images = document.getElementById('images').appendChild(elements);
        }*/
        }
        else if (image === "Birthday") {
            item = item + '<img src="dd.png" alt="">';
            /*var elements = document.createElement('img');
            elements.setAttribute('src','dd.png');
            var images = document.getElementById('images').appendChild(elements);*/
    
        }
        else { item = '<strong> item not found </strong>' }

        
        // document.getElementsByTagName('body').appendChild(images);
    }
     return item;
}