import { C } from "../constants.js";
const platform = new Image();
platform.src = "./images/platform.png";
export class Platform {
  constructor(position) {
    this.position = position;
    this.width = 200;
    this.height = 20;
  }
  draw() {
    C.drawImage(
      platform,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
