const person = {
  name: ["Bob", "Smith"],
  age: 45,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`HI! I am ${this.name[0]}`);
  },
};

const person2 = {
  name: {
    first: "bob",
    last: "smith",
  },
};

console.log(person2.name.first);

// Constructor - 1
//================

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi I am ${this.name}`);
  };
  return obj;
}

const personObj = createPerson("Mikaeil");
console.log(personObj.name);
personObj.introduceSelf();

// Constructor -2
//===============

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi I am ${this.name}`);
  };
}
const p1 = new Person("Esmaeil");
p1.introduceSelf();

const myObject = {
  city: "madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();

function traverseProto(obj) {
  let object = obj;
  do {
    object = Object.getPrototypeOf(object);
    console.log(object);
  } while (object);
}

traverseProto(myObject);

const date = new Date();

let objDate = date;
traverseProto(objDate);

//===============================
// Setting an object 's prototype
//===============================

const personPrototype = {
  greet() {
    console.log("Hello");
  },
};

const employee = Object.create(personPrototype);
employee.greet();
traverseProto(employee);

const carl = Object.create(employee);
carl.greet();
console.log("Carl...");
traverseProto(carl);

// Every function has a property named:
// prototype.
// When a new abject is created using new Function()
// That functions prototype property becomes new objects prototype

function Person2(name) {
  this.name = name;
}

Person2.prototype = personPrototype;
Person2.prototype.constructor = Person2;

const worker = new Person2("Smith");
console.log(worker.name);
worker.greet();
traverseProto(worker);

console.log("Has name:", Object.hasOwn(worker, "name"));
console.log("Has greet", Object.hasOwn(worker, "greet"));
