// 1. Advanced TypeScript Generics

import { time } from "console";

// Question: Implement a generic function that filters an array of objects based on a specific property value.
function filterByProperty<T, K extends keyof T>(
  list: T[],
  key: K,
  value: T[K]
) {
  return list.filter((item) => item[key] == value);
}

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 40 },
  { name: "Charlie", age: 30 },
];

console.log(filterByProperty(people, "age", 30)); // [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
console.log(filterByProperty(people, "name", "Bob")); // [{ name: 'Bob', age: 40 }]

// 2. Implement a Debounce Function

// Question: Write a debounce function in TypeScript.
function debounce(fn: Function, delay: number): Function {
  // In Node.js, setTimeout returns a Timeout object, whereas in the browser, it returns a numeric ID.
  let timeoutID: number | NodeJS.Timeout;
  // anonymous function: function without name, temporary function, gathers the remaining arguments into an array
  // ...args means Rest Parameters
  return function (...args: any[]) {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
    
  }
}
