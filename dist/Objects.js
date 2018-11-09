class Box {
  constructor(x, y, w, h, options = {}) {
    this.w = w;
    this.h = h;

    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

  draw() {
    const { x, y } = this.body.position;
    fill(255);
    noStroke();

    rectMode(CENTER);
    rect(x, y, this.w, this.h);
  }
}

class Circle {
  constructor(x, y, r, options = {}) {
    this.r = r;

    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
  }

  draw() {
    const { x, y } = this.body.position;
    fill(255);
    noStroke();

    ellipseMode(CENTER);
    ellipse(x, y, this.r * 2);
  }
}
