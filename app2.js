var data = {
  labels: [],
  datasets: [
    {
      label: 'Cartoons',
      fillColor: "rgba(151, 187, 205, 0.5)",
      strokeColor: "rgba(151, 187, 205, 0.8)",
      highlightFill: "rgba(151, 187, 205,0 .75)",
      highlightStroke: "rgba(151, 187, 20 5,1)",
      data: []
    }
  ]
}

var images = [];
var files = ['beavisbutthead','bobsburgers','familyguy','futurama','johnnybravo','kingofthehill','rocketpower','scoobydoo','simpsons','spongebob','tmnt','tomjerry'];

function Photo(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 1;
  data.labels.push(name);
  data.datasets[0].data.push(0);
  images.push(this);
}

function buildPhoto() {
  for (var i = 0; i < files.length; i++) {
    var filePath = 'img/' + files[i] + '.jpg';
    new Photo(files[i], filePath);
  }
} buildPhoto();


var tracker = {
  left: '',
  right: '',
  leftImgEl: document.getElementById('leftPhoto'),
  rightImgEl: document.getElementById('rightPhoto'),
  leftCaption: document.getElementById('capLeft'),
  rightCaption: document.getElementById('capRight'),

  getRandomNum: function() {
    return Math.floor(Math.random() * images.length);
  },

  getRandomImg: function() {
    this.left = images[tracker.getRandomNum()];
    this.right = images[tracker.getRandomNum()];
    
    while(this.left === this.right) {
      this.right = images[tracker.getRandomNum()];
    }
    this.leftImgEl.src = this.left.path;
    this.leftImgEl.id = this.left.name;
    this.leftCaption.textContent = this.left.name;

    this.rightImgEl.src = this.right.path;
    this.rightImgEl.id = this.right.name;
    this.rightCaption.textContent = this.right.name;
  },

  vote: function(id) {
    for (var i in images) {
      if (images[i].name === id) {
        images[i].votes += 1;
        chart.datasets[0].bars[i].value = images[i].votes;
      }
    }
  }
}

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