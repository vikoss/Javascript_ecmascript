/*
| Destructuring assignment
*/
const object = {
  name: 'Victor',
  age: 22,
  country: 'MX',
  lastname: 'Israel',
};

let { country, ...rest } = object;
console.log(country, rest);

/*
| Finally()
*/
const helloWorld = () => new Promise((resolve, reject) => {
  (true)
    ? resolve('Hello World')
    : reject(new Error('Ups!'))
});

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizo'))

/*
| Regex
*/
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regex.exec('2019-06-06');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);

