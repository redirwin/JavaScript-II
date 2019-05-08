// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let place = "Italy";
function vacationDreams() {
  console.log(`Please, please, please can I go to ${place} for a month?`);
}
vacationDreams();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};
const newCount = counter();
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let plusCount = 0;
  let minusCount = 0;
  return {
    increment() {
      return ++plusCount;
    },
    decrement() {
      return --minusCount;
    }
  }

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
let countBothWays = counterFactory();
console.log(countBothWays.increment())
console.log(countBothWays.decrement())
console.log(countBothWays.increment())
console.log(countBothWays.decrement())
console.log(countBothWays.increment())
console.log(countBothWays.decrement())


