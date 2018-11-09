class Footballer {
  constructor() {
    this.jumpActive = false;
    this.x = width / 2;
    this.y = 300;
    this.r = 30;
    this.head = new Circle(this.x, this.y, this.r);
  }

  draw() {
    this.head.draw();
  }

  jump() {
    if (!this.jumpActive) {
      this.jumpActive = true;
      this.head.body.position.y -= 10;

      setTimeout(() => (this.jumpActive = false), 1000);
    }
  }
}
