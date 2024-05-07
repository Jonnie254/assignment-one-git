// Define a class representing a Person
class Person {
  // Properties
  private name: string;
  private age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create an instance of the Person class
const person1 = new Person("John", 30);

// Call the greet method
person1.greet();
