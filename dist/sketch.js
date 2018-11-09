let footballers = [];

function setup() {
  createCanvas(600, 500);

  footballers.push(new Footballer());
}

function draw() {
  background(51);
  footballers[0].draw();
}
