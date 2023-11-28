/**
 * breaking up a multi argument function into series of single arg ones by help of closures
 */

// function with to arguments!
function greet(greet, name) {
  return `${greet} , ${name}`;
}

// use currying
// this help me to call the same greet with different person
function curryGreet(greet) {
  return function (name) {
    return `${greet} , ${name}`;
  };
}

// debugger;
const greetInItaly = curryGreet("Ciao");
console.log(greetInItaly("Amr"));

const greetInEnglish = curryGreet("Hello");
console.log(greetInItaly("Amr"));
console.log(greetInItaly("mohamed"));
