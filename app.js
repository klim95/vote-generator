var images = []

function photo(name, path) {
	this.name = name;
	this.path = path;
	images.push(this);
}

var beavisbutthead = new photo ("Beavis and Butthead", "img/beavisbutthead.jpg");
var bobsburgers = new photo ("Bob's Burgers", "img/bobsburgers");
var familyguy = new photo ("Family Guy", "img/familyguy");
var futurama new photo ("Futurama", "img/futurama");
var johnnybravo new photo ("Johnny Bravo", "img/johnnybravo");
var kingofthehill new photo ("King of the Hill", "img/kingofthehill");
var rocketpower new photo ("Rocket Power", "img/rocketpower");
var scoobydoo new photo ("Scooby Doo", "img/scoobydoo");
var simpsons new photo ("The Simpsons", "img/simpsons");
var spongebob new photo ("Spongebob Squarepants", "img/spongebob");
var tmnt new photo ("Teenage Mutant Ninja Turtles", "img/tmnt");
var tomjerry new photo ("Tom & Jerry", "img/tomjerry");


var cartoonimage1 = function {
	var image1 = Math.floor(Math.random() * images.length);
	document.getElementById("choice1").src = images[image1].path;
	document.getElementById("title1").src= images[image1].name;
}


var cartoonimage2 = function {
	var image2 = Math.floor(Math.random() * images.length);
	document.getElementById("choice2").src = images[image2].path;
	document.getElementById("title2").src - images[image2].name;
}

photo();
cartoonimage1();
cartoonimage2();


