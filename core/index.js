//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.

 var fs = require("fs");
 fs.readFile("./theory.md", "utf-8", (err,data) => {
   console.log(data);
 })

//6. Blocking code
 // Run it first and observe the output
//  var file = fs.readfileSync('./theory.md');
//  console.log(file);
//  console.log('run me first');
 
 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code.

//  answer

// in blocking code output
// theordmd which results in buffer
// "file"
// "run me first"


// Non blocking code output
// "file"
// "run me first"
// theordmd which results in buffer




// 10. require math.js
  // console const pie and add and multiply function.

// answer
 
// the below math.js file is not available but the samilar answer was written in tasks.md"
var math = require("./math.js");

console.log(math.pie, sum(1,2), multiply(2,3));


