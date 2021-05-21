const data = {
  frontend: 'Victor',
  backend: 'Israel',
  design: 'Ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

/*
| padStart() and padEnd() method
*/
const folio = '8';
const name = 'Victor';
console.log(folio.padStart(8, '0'));
console.log(name.padStart(15, ' *'));

/*
| Async Await
*/
const helloWorld = () => new Promise((resolve, reject) => {
  (true)
    ? setTimeout(() => resolve('Hello World!'), 3500)
    : reject(new Error('Ups!!!'));
});

const functionAsync = async () => {
  try {
    console.log(await helloWorld());
  } catch (error) {
    console.error(error);
  }
};