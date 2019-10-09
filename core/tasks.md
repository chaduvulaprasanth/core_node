1. Explain Node and V8 in your own words ? 
// Answer here...
  ```js
  open-source, cross-platform, runtime environment that allows developers to create all application and it is built around Google’s V8 JavaScript engine which is primarily written in JavaScript.

  v8 is single threaded(performs one task at a time) and used for core javascript computation.
  ```


2. Explain steps in REPL(here) and command to start REPL ?
// Answer here...
  ```js
  Read Eval Print Loop
  REPL(Read Eval Print Loop)(5 min)
  it is inteactive javascript runtime which executtes JS code on go like console in browsers, starts event loop in background and waits for code snippets.

  To start REPL mode type node is terminal and enter 
  ```

3. Run `index.js` in the same directory as script writer using `node FILE_NAME.js` and output result of console here.
// Answer here...
  ```js
  it starts excuting the code written in index.js file
  ```

4. Require fs module and read `theory.md` using fs.readFile method in index.js file.
// Answer here...
  ```js
  var fs = require("fs");
  ```

5. Explain Buffer and different methods to create a buffer ?
// Answer here...
  ```js
  Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.
  It stores data in hexadecimal format.
  var buf = new Buffer("Simply Easy Learning");
  var newBuff = new Buffer(20);
  buf.toString()
  ```


6. What is blocking code ? How is it different from non-blocking/async codes ? Correct blocking code in index.js to run asynchronously ?
// Answer here ...
  ```js
  blokcing code means synchronus code, as node is single threaded which the code runs synchronusly one 
  by one. if any line of code takes time, next line will wait untill the before line excution finishes.

  non-blocking code means asynchronous code, so the asynchronous code takes call back functions and 
  excutes in background and waits, once the reaminging code excution finishes, async code will run


  example:

  const fs = require("fs");

  // blocking, synchronus way
  const textin = fs.readFileSync("./txt/input.txt", "utf-8");
  console.log(textin);

  // Non- blocking, Asynchronus way
  fs.readFile("./txt/start.txt", "utf-8", (err,data) => {
      console.log(data);
  })

  ```


7. Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.
```js

```

8. Parse the URL `http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4` using `url` module's parse method and write output in answer.js
// Answer here ...
  ```js
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: null,
  search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  query: 'token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  pathname: '/api/v3',
  path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  href:
   'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4' }
```


9. parse the query object as well from above url using `url.parse(url, true)` and output result in answer.js
```js
{ token: '8372fcb8y2874b2t478t6t48cbtbc72t4' }  
```

10. create a file `math.js`
  1. Export variables and functions
    - define a const pie = 3.14
    - define functions to add and multiply 2 numbers
    - export it from math.js
    - require in index.js and console the output by executing it there.
```js
// math.js
const pie = 3.14;
function sum() {}
function multiply() {}
// export it from math.js
// answer

// math.js
var pie = 3.14;
function sum(a,b) {
  return a+b;
}
function multiply(a,b) {
  return a*b;
}
module.exports = {
  pie,sum,multiply
}

// index.js
var math = require("./math.js");
console.log(math.pie, sum(1,2), multiply(2,3));
```

  2. Define above const and functions as properties and methods on module.exports object.
    - require in index.js and execute it.

```js
  module.exports = {
    pie: 3.14,
    add: (a,b) => {return a+b},
    multiply: (a,b) => {return a*b}
  }
```
  3. Define above using exports 

```js
exports.sum = function(a,b) => {return a+b}
```
