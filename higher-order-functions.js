function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function concat(array1, array2) {
  return array1.concat(array2);
}

function filter(predicateFn, array) {
  // debugger;
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

console.log(filter((item) => item < 4, [1, 2, 3, 4]));

function map(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const mappedFirst = [predicateFn(firstItem)];
  return concat(mappedFirst, map(predicateFn, tail(array)));
}

console.log(map((item) => item * 2, [2, 4, 8]));

function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}

sum = reduce(
  (accumulator, value) => {
    return accumulator + value;
  },
  0,
  [1, 3, 2]
);

console.log(sum);
