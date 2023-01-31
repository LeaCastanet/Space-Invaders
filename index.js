const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0,
    };

    const image = new Image();
    image.src = "./img/spaceship.png";
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };
  }

  draw() {
    // c.fillStyle = "red";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }
}

const player = new Player();
const keys = {
  q: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.q.pressed || keys.ArrowLeft.pressed || keys.a.pressed) {
    player.velocity.x = -5;
  } else if (keys.d.pressed || keys.ArrowRight.pressed) {
    player.velocity.x = 5;
  } else {
    player.velocity.x = 0;
  }
}

animate();

window.addEventListener("keydown", ({ key }) => {
  // console.log(key);
  switch (key) {
    case "ArrowLeft":
      console.log("left");
      keys.ArrowLeft.pressed = true;
      break;
    case "q":
      console.log("left");
      keys.q.pressed = true;
      break;
    case "a":
      console.log("left");
      keys.a.pressed = true;
      break;
    case "ArrowRight":
      console.log("right");
      keys.ArrowRight.pressed = true;
      break;
    case "d":
      console.log("right");
      keys.d.pressed = true;
      break;
    case " ":
      console.log("space");
      break;
  }
});

window.addEventListener("keyup", ({ key }) => {
  // console.log(key);
  switch (key) {
    case "ArrowLeft":
      console.log("left");
      keys.ArrowLeft.pressed = false;
      break;
    case "q":
      console.log("left");
      keys.q.pressed = false;
      break;
    case "a":
      console.log("left");
      keys.a.pressed = false;
      break;
    case "ArrowRight":
      console.log("right");
      keys.ArrowRight.pressed = false;
      break;
    case "d":
      console.log("right");
      keys.d.pressed = false;
      break;
    case " ":
      console.log("space");
      break;
  }
});
