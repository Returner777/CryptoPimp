
let unicorn;
let uImg;
let tImg;
let bImg;
let kovancis = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  uImg = loadImage('fraldo brez.png');
  tImg = loadImage('Pimp token BG.png');
  bImg = loadImage('web 2.jpg');
}

function mousePressed() {
  kovancis.push(new Kovanci());
}

function setup() {
  createCanvas(800, 450);
  fraldo = new Fraldo();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    fraldo.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    fraldo.jump();
  }
}

function draw() {
  
  if (random(1) < 0.005) {
    kovancis.push(new Kovanci());
  }
  
  background(bImg);
  for (let t of kovancis) {
    t.move();
    t.show();
    if (fraldo.hits(t)) {
      console.log('game over');
      noLoop();
    }
  }

  fraldo.show();
  fraldo.move();
}
