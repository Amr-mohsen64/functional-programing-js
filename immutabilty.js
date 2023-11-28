// Mutation (dangerous!)
let cities = ["Delhi", "Bombay", "Bangalore"];
cities[1] = "Mumbai";
cities; // ["Delhi", "Mumbai", "Bangalore"]

// No mutation (safer!)
const oldCities = ["Delhi", "Bombay", "Bangalore"];
const newCities = oldCities.map((city) => {
  if (city === "Bombay") return "Mumbai";
  if (city === "Bangalore") return "Bengaluru";
  return city;
});

newCities; //["Delhi", "Mumbai", "Bengaluru"]
oldCities; //["Delhi", "Bombay", "Bangalore"]

// -----------------------------avoiding mutation-------------

const arr = [1, 2, 3];
// instead of myArray.push(element)
function push(element, array) {
  return [...array, element];
}

// instead of myArray[index] = value
function update(index, value, array) {
  return array
    .slice(0, index)
    .concat(value)
    .concat(array.slice(index + 1));
}

console.log(update(2, 50, arr));

function pop(array) {
  return array.slice(0, -1);
}
