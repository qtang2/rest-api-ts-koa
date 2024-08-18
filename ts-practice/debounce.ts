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
