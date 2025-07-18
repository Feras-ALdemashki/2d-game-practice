import { GRAVITY } from "../constants.js";
import { C } from "../constants.js";
import { CANVAS } from "../constants.js";
const fallRight = new Image();
fallRight.src = "./images/player/Fall.png";
const fallLeft = new Image();
fallLeft.src = "./images/player/FallLeft.png";
const idle = new Image();
idle.src = "./images/player/Idle.png";
const idleLeft = new Image();
idleLeft.src = "./images/player/IdleLeft.png";
const jump = new Image();
jump.src = "./images/player/Jump.png";
const jumpLeft = new Image();
jumpLeft.src = "./images/player/JumpLeft.png";
const runRight = new Image();
runRight.src = "./images/player/Run.png";
const runLeft = new Image();
runLeft.src = "./images/player/RunLeft.png";

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
      this.position.x + this.width / 2, // center X
      this.position.y + this.height / 2, // center Y
      this.width / 2, // radius (you can also use Math.min(width, height)/2)
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
