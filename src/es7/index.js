/**
| The includes() method
*/
const numbers = [ 1, 2, 3, 4, 5, ];
const challenge = 2;
if (numbers.includes(challenge)) {
  console.log(`Si se encuentra el valor '${challenge}'.`);
} else {
  console.log(`No se encuentra el valor '${challenge}'.`);
}

/**
| Pow
*/
const base = 4;
const exponent = 3;
console.log(base ** exponent);