var http = require("http");
var fs = require("fs");
var url = require("url")
var userpath = __dirname + "/users/";
var server = http.createServer(handleRequest);

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
var fs = require("fs");

fs.readFile("./theory.md", (err,data) => {
  console.log(data);
})

// buffer output
// <Buffer 23 23 20 46 69 6c 65 20 53 79 73 74 65 6d 0a 54 68 65 20 66 73 20 6d 6f 64 75 6c 65 20 70 72 6f 76 69 64 65 73 20 61 6e 20 41 50 49 20 66 6f 72 20 69 ... >


// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.

  fs.readFile("./theory.md","utf-8", (err,data) => {
    console.log(data);
  })
// 3. Write script to read file Synchronously and console the output.
  const textin = fs.readFileSync("./txt/input.txt", "utf-8");
  console.log(textin);
// 4. Write script to create a file 'write.js' and write content of read.js in there.

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

// 6. Delete the content of write.js using fs.unlink or unlinkSync method