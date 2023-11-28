function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function pipeline(...functions) {
  
  if (length(functions) === 0) return (input) => input;
  if (length(functions) === 1) return (input) => head(functions)(input);

  return function (input) {
    return pipeline(...tail(functions))(head(functions)(input));
  };
}


debugger
pluralize = (singularWord) => singularWord + "s";

heart = (word) => "I ❤️ " + word;

exclaim = (sentence) => sentence + "!";

showSomeLove = pipeline(pluralize, heart, exclaim);

pipelineLove = showSomeLove("pipeline");
// pipelineLove ☝️ should be "I ❤️ pipelines!"

functionLove = showSomeLove("pure function");
// functionLove ☝️ should be "I ❤️ pure functions!"


console.log(functionLove);