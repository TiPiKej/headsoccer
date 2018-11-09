const { Bodies, World, Engine } = Matter;
let engine;
let world;

let footballers = [];
let wall;

function setup() {
  createCanvas(600, 500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  footballers.push(new Footballer());

  wall = new Field();
}

function draw() {
  background(51);
  footballers.forEach(fber => fber.draw());
  wall.draw();
}

function keyPressed(code) {
  footballers[0].jump();
}
