let ender = (ending) => (input) => input + ending;

let adore = ender(" rocks");
let announce = ender(", ya'll");
let exclaim = ender("!");

let hypeUp = (x) => exclaim(announce(adore(x)));

console.log(hypeUp("JS"));
console.log(hypeUp("FB"));
