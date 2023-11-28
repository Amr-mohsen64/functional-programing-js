// ----------ex 1-----------------

function makeAdjectifier(adjective) {
  return function (noun) {
    return adjective + " " + noun;
  };
}


debugger;
const coolify = makeAdjectifier("cool");
console.log(coolify("workshop"));;
console.log(coolify("drin"));;
