// Person class
class Person {
  // optional for readablity of code
  // constructor will create a name variable
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hello my name is ${this.name}`);
  }
}

// Proffessor class
class Proffessor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name} and I will be your ${this.teaches} proffessor. `
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

// Student class
class Student extends Person {
  // Private properties
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi I am ${this.name} and I am in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

const giles = new Person("Giles");
giles.introduceSelf();

const walsh = new Proffessor("Walsh", "Psychologu");
walsh.introduceSelf();
walsh.grade("my paper");

const summers = new Student("Summers", 2);
summers.introduceSelf();
console.log("Can study: ", summers.canStudyArchery());
