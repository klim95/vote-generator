var images = []

function photo(name, path) {
	this.name = name;
	this.path = path;
	this.votes = 0;
	images.push(this);
}

var beavisbutthead = new photo ("Beavis and Butthead", "img/beavisbutthead.jpg");
var bobsburgers = new photo ("Bob\'s Burgers", "img/bobsburgers.jpg");
var familyguy = new photo ("Family Guy", "img/familyguy.jpg");
var futurama = new photo ("Futurama", "img/futurama.jpg");
var johnnybravo = new photo ("Johnny Bravo", "img/johnnybravo.jpg");
var kingofthehill = new photo ("King of the Hill", "img/kingofthehill.jpg");
var rocketpower = new photo ("Rocket Power", "img/rocketpower.jpg");
var scoobydoo = new photo ("Scooby Doo", "img/scoobydoo.jpg");
var simpsons = new photo ("The Simpsons", "img/simpsons.jpg");
var spongebob = new photo ("Spongebob Squarepants", "img/spongebob.jpg");
var tmnt = new photo ("Teenage Mutant Ninja Turtles", "img/tmnt.jpg");
var tomjerry = new photo ("Tom \& Jerry", "img/tomjerry.jpg");


var cartoon1 = function() {
	var image1 = Math.floor(Math.random() * images.length);
	console.log(images[image1]);
	document.getElementById("choice1").src = images[image1].path;
	document.getElementById("title1").src = images[image1].name;
}

var cartoon2 = function() {
	var image2 = Math.floor(Math.random() * images.length);
	console.log(images[image2]);
	document.getElementById("choice2").src = images[image2].path;
	document.getElementById("title2").src = images[image2].name;
}

cartoon1();
cartoon2();

//displayChart in tracker

var displayChart = function() {

var ctx = document.getElementById("myChart").getContext("2d");

	var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
	]

var pieOptions = {
	segmentShowStroke : false,
	animateScale : true
}

var myPieChart = new Chart(ctx).Pie(data,pieOptions);

}

displayChart();
