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

var displayChoice1 = document.getElementById('choice1');
var displayChoice2 = document.getElementById('choice2');

var tracker = {
  choice1: 0,
  choice2: 0,

  calcRandNum: function() {
    return Math.floor(Math.random() * images.length);
  },

  displayPhotos: function() {
    this.choice1 = this.calcRandNum();
    this.choice2 = this.calcRandNum();

    while (this.choice1 === this.choice2) {
      this.choice2 = this.calcRandNum();
    };

	var photo1 = images[this.choice1];
	var photo2 = images[this.choice2];

	displayChoice1.src = photo1.path;
	displayChoice2.src = photo2.path;

	displayChoice1.addEventListener('click', this.voteLeft);
	displayChoice2.addEventListener('click', this.voteRight);
  },

  voteLeft: function() {
    images[tracker.choice1].votes +=1;
    tracker.displayPhotos();
  },
  voteRight: function() {
    images[tracker.choice2].votes +=1;
    tracker.displayPhotos();
  },
}


tracker.displayPhotos();


//displayChart in tracker

var displayChart = function() {

var ctx = document.getElementById("myChart").getContext("2d");

var data = [
   {
       value: images[tracker.choice2].votes,
       color:"#F7464A",
       highlight: "#FF5A5E",
       label: "Red"
   },
   {
       value: images[tracker.chioce2].votes,
       color: "#46BFBD",
       highlight: "#5AD3D1",
       label: "Green"
   },
]

var pieOptions = {
	segmentShowStroke : false,
	animateScale : true
}

var myPieChart = new Chart(ctx).Pie(data,pieOptions);

}

displayChart();
