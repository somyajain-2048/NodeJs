function greet(name) {
  return `hello ${name}`;
}

module.exports = greet;
// modules contains resulable code which we import and export
// core modules

// 1.....File modules....
const fs = require("fs");

fs.readFile("log.txt", "utf-8", (err, res) => {
  if (err) throw err;
  setTimeout(() => {
    // console.log(res);
  }, 2000);

  // console.log("read file");
});

fs.writeFile("new.txt", "hello world from nodejs", (err) => {
  if (err) throw err;
  // console.log("file wriiten in node");
});

fs.unlink("new.txt", (err) => {
  if (err) throw err;
  // console.log(" file deleted");
});

// 2....path modules ->help safely build and work with file paths

const path = require("path");
console.log(__dirname); // current directory
console.log(__filename); // current file name

console.log(path.basename(__filename)); // index.js
console.log(path.dirname(__filename)); // full path
console.log(path.extname(__filename)); // .js

const fullPath = path.join(__dirname, "folder", "file.txt");
console.log(fullPath);

// 3.....OS MOdules ->gives info about os

const os = require("os");

console.log("OS Type:", os.type());
console.log("Platform:", os.platform());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("CPU Info:", os.cpus());
console.log("Home Dir:", os.homedir());

// 4....."cli arguments "-->allow to pass inputs to ur prgm through terminal

const name = process.argv[2];
console.log(`heeloo ${name}`);
