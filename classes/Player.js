import { GRAVITY } from "../constants.js";
import { C } from "../constants.js";
import { CANVAS } from "../constants.js";

export class Player {
  constructor(position) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.height = 30;
    this.width = 30;
  }
  draw() {
    C.beginPath();
    C.fillStyle = "red";
    C.arc(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.width / 2,
      0,
      Math.PI * 2
    );
    C.fill();
    C.closePath();
  }
  update() {
    // visit this to understand more about the velocity here
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y < CANVAS.height)
      this.velocity.y += GRAVITY;
    else {
      this.velocity.y = 0;
    }
  }
}
