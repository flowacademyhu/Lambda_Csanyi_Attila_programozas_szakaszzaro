const calculator = require('./modules');

// 1.
// Number
const num = 42;

// String
const str = 'string';

// Boolean
const bool = true;

// undefined
const undef = undefined;

// null
const n = null;

// array
const arr = [1, 2, 3, 4, 5];

// object
const obj = {
  name: 'Feri',
  age: 23
};

// 2
// A let-tel létrehozott váltózónak nem kötelező kezdeti értéket megadni, és később módosítható az étérke. Pl:
let num2;
num2 = 2;
// A const-tal kostans hozható létre, kötelező kezdeti étérket megadni neki, és nem változtatható az értéke. Pl:
const PI = 3.14;

// 3.
// Az érték szerinti paraméter átadás során másolat készül az értékről
// és a függvény a másolattal dolgozik, nem módosítja a külső változó értékét.
// A javascriptben a primitív típusok érték szerint adódnak át: number ,string, boolean, undefined, null
// Pl:
let num3 = 3;
const add2 = (num) => {
  num = num + 2;
};
add2(num3);
console.log(num3); // 3

// A referencia szerintin átadáskor a memóraicím kerül átadásra,
// emiatt a függvényen belüli módosítás módosítja a külső váltózó értékét is.
// A javascriptben az összetett adattípusok referencia szerint kerülnek átadásra: array, object
// Pl:
const arr2 = [];
const push2 = (arr) => {
  arr.push(2);
};
push2(arr2);
console.log(arr2); // [ 2 ];

// 4.
const containsElement = (arr, num) => {
  let i = 0;
  while (i < arr.length && arr[i] !== num) {
    i++;
  }
  return i < arr.length;
};
console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
console.log(containsElement([1, 2, 3, 4, 5], 6)); // false

// 5
const oldestName = (arr) => {
  let name = arr[0].name;
  let maxAge = arr[0].age;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > maxAge) {
      maxAge = arr[i].age;
      name = arr[i].name;
    }
  }
  return name;
};
console.log(
  oldestName([
    { name: 'Feri', age: 25 },
    { name: 'Tibi', age: 30 }
  ])
); // 'Tibi'

// 6
const metszet = (arr1, arr2) => {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !arr3.includes(arr1[i])) {
        arr3.push(arr1[i]);
        break;
      }
    }
  }
  return arr3;
};
console.log(metszet([1, 1, 2, 3], [4, 1])); // [ 1 ]

// 7
console.log(calculator.add(10, 2)); // 12
console.log(calculator.multiply(10, 2)); // 20
console.log(calculator.power(10, 2)); // 100

// 8
const array2d = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
  return arr;
};

console.log(array2d(3, 3));
