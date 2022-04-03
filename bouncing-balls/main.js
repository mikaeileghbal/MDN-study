const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

console.log(randomRGB());

// Ball class

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}
console.log(balls);

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

// let person = {
//   fullname: function (city) {
//     return this.firstname + ", " + this.lastname;
//   },
// };

// let person1 = {
//   firstname: "John",
//   lastname: "Doe",
// };

// person.fullname.call(person1, "London");
// person.fullname.apply(person1, ["london"]);

// Math.min.call(null, 1, 2, 3, 4);
// Math.max.apply(null, [1, 2, 3, 5]);

// let name = person.fullname.bind(person1);
// console.log(name());

// const employee = {
//   firstname: "John",
//   lastname: "Doe",
//   display: function () {
//     console.log(this.firstname + ", " + this.lastname);
//   },
// };

// const display = employee.display.bind(employee);
// setTimeout(display, 3000);

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// })();

// add();
// add();
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   get carName() {
//     return this.name;
//   }

//   set carName(value) {
//     this.name = value;
//   }

//   display() {
//     return this.name;
//   }

//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// class Model extends Car {
//   constructor(name, year, brand) {
//     super(name, year);
//     this.brand = brand;
//   }
// }

// let car1 = new Car("Ford", 1990);
// console.log(car1.carName);
// car1.carName = "Benz";
// console.log(car1.carName);
