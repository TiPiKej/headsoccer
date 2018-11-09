class Field {
  constructor() {
    this.options = {
      isStatic: true
    };

    this.wh = 50;

    this.walls = [
      new Box(width / 2, height, width, this.wh, this.options),
      new Box(-this.wh / 2, height / 2, this.wh, height, this.options),
      new Box(width / 2, -this.wh / 2, width, this.wh, this.options),
      new Box(width, height / 2, this.wh, height, this.options)
    ];
  }

  draw() {
    this.walls.forEach(wall => {
      wall.draw();
    });
  }
}
