let sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

const { bread, meat } = sandwich;

console.log(bread, meat);

class Sandwich {
  constructor({ bread, meat, cheese, toppings }) {
    this.bread = bread;
    this.meat = meat;
    this.cheese = cheese;
    this.toppings = toppings;
  }

  display() {
    console.log(this.bread, this.meat, this.cheese, this.toppings);
  }
}

const sandwich1 = new Sandwich(sandwich);

sandwich1.display();

let a, b;

({ a, b } = { a: 1, b: 2 });

const o = { p: 42, q: true };

const { p: foo, q: bar } = o;
console.log(foo, bar);
