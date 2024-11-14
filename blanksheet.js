


// interface Person {
//   name: string;
//   greet(): void;
//   walk(): void;
//   sleep(): void;
// }

// // Create a function that takes a person object and a method name to call
// function executePersonMethod(person: Person, methodName: keyof Person) {
//   // Check if the method exists and is callable, then call it
//   if (typeof person[methodName] === "function") {
//     (person[methodName] as Function)(); // Call the function dynamically
//   } else {
//     console.log(`Property ${methodName} is not a method.`);
//   }
// }

// // Example of using the function
// const person: Person = {
//   name: "Alice",
//   greet() { console.log("Hello!"); },
//   walk() { console.log("Walking..."); },
//   sleep() { console.log("Sleeping..."); }
// };

// // Call the function with different method names
// executePersonMethod(person, "greet"); // Outputs: "Hello!"
// executePersonMethod(person, "walk");  // Outputs: "Walking..."
// executePersonMethod(person, "sleep"); // Outputs: "Sleeping..."

const objectA={
  name: 'objectA',
  testFunc(){
    console.log('testFunc is called') 
  }
}
objectA['testFunc']() 