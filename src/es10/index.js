/*
| flat() and flatMap() method
*/

let array = [
  1, 2, 3, [
    1, 2, 3, [
      1, 2, 3
    ]
  ]
];

console.log(array.flat(2));

array.map((x) => [ x * 2 ]);
array.flatMap((x) => [ x * 2 ]);

/*
| trimStart() and trimStart() method
*/
let lorem = `                  Lorem ipsum
  dolor sit amet consectetur adipisicing elit.

`;
console.log(lorem);
console.log(lorem.trimStart());
console.log(lorem.trimEnd());
console.log(lorem.trim());

/*
| Objects
*/
let entries = [
  [ 'name', 'Victor' ],
  [ 'age', 22 ],
  [ 'country', 'MX' ]
];
console.log(Object.fromEntries(entries));