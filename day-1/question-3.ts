// Question 3: Interface
// Create an Interface for the object below.

const person = {
  firstName: "Michael",
  lastName: "Scott",
  age: 40,
  isAdmin: true,
};

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
}

export {};
