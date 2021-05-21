/*
| Default Params
*/
function exampleFunction(name, age, country) {
  var name = name || 'default';
  var age = age || 'default';
  var country = country || 'default';
  console.log(name, age, country);
}

// es6
function exampleFunction2(name = 'default', age = 'default', country = 'default') {
  console.log(name, age, country);
}

exampleFunction2();
exampleFunction2('Victor', 22, 'MX');

/*
| Template Literals
*/

let hello = 'Hello';
let worl = 'world!';
let epicPhrase = hello + ' ' + worl;
console.log(epickPhrase);

// es6
let epicPhrase2 = `${hello} ${worl}`;
console.log(epicPhrase2);


let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n'
  + 'Tempora magni soluta illo, dicta nemo voluptas! Autem iusto totam nobis,\n'
  + 'quam ipsa dolorem ipsam officiis facilis eos explicabo incidunt aliquid architecto.';
console.log(lorem);

// es6
let lorem2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Tempora magni soluta illo, dicta nemo voluptas! Autem iusto totam nobis,
  quam ipsa dolorem ipsam officiis facilis eos explicabo incidunt aliquid architecto.`;
console.log(lorem2);

/*
| Spread Operator
*/
let person = {
  name: 'Victor',
  age: 22,
  country: 'MX',
};
let name = person.name;
let age = person.age;
let country = person.country;
console.log(name, age, country);

// es6
let { name, age, country } = person;
console.log(name, age, country);

/*
| Scope: let, const and var
*/
{
  let varLet = 'varLet';
  console.log(varLet);
}
{
  const varConst = 'varConst';
}
{
  var varVar = 'varVar';
}
console.log(varVar);
console.log(varConst);

/*
| Arrow Functions
| - Does not have its own bindings to this or super, and should not be used as methods.
*/

[{ name: 'Victor', age: 22, country: 'MX' }].map((person) => console.log(person.name));

/*
| Promises
*/

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    }
    reject('Ups!');
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/*
| Classes
*/

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  };
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  };
};

const calc = new calculator();
console.log(calc.sum(4, 5));

/*
| Generators
*/
function* helloWorldGenerator() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World!';
  }
};

const generatorHello = helloWorldGenerator();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


