import { Player } from "./classes/Player.js";
import { Platform } from "./classes/Platform.js";
import { C } from "./constants.js";
import { CANVAS } from "./constants.js";
import { keys } from "./keys.js";
import { setupInput } from "./inputs.js";
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
const BG = new Image();
BG.src = "./images/BG.jpg";
// create a new player
const player = new Player({
  x: 100,
  y: 100,
});
const platforms = [
  new Platform({ x: 150, y: 520 }),
  new Platform({ x: 600, y: 430 }),
  new Platform({ x: 300, y: 300 }),
  new Platform({ x: 900, y: 460 }),
  new Platform({ x: 750, y: 220 }),
  new Platform({ x: 1000, y: 100 }),
  new Platform({ x: 150, y: 120 }),
];
// inputs for player movement
setupInput(keys);
// main function to animate the game
const animate = () => {
  window.requestAnimationFrame(animate);

  C.drawImage(BG, 0, 0, CANVAS.width, CANVAS.height);
  player.update();
  player.velocity.x = 0;

  if (keys.d.pressed) player.velocity.x = 3;
  if (keys.a.pressed) player.velocity.x = -3;
  if (keys.w.pressed) player.velocity.y = -5;

  const playerTop = player.position.y;
  const playerBottom = player.position.y + player.height;
  const playerLeft = player.position.x;
  const playerRight = player.position.x + player.width;

  platforms.forEach((p) => {
    p.draw();

    const platformTop = p.position.y;
    const platformBottom = p.position.y + p.height;
    const platformLeft = p.position.x;
    const platformRight = p.position.x + p.width;

    const isWithinPlatformX =
      playerRight > platformLeft && playerLeft < platformRight;

    // Landing on top
    const isLanding =
      playerBottom <= platformTop &&
      playerBottom + player.velocity.y >= platformTop &&
      isWithinPlatformX;

    if (isLanding) {
      player.velocity.y = 0;
    }

    // Hitting from below
    const isHittingBottom =
      playerTop >= platformBottom &&
      playerTop + player.velocity.y <= platformBottom &&
      isWithinPlatformX;

    if (isHittingBottom) {
      player.velocity.y = 0;
    }
  });
};

animate();
