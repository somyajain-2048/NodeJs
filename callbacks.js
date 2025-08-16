//read file using callbacks

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data1) => {
//   if (err) throw err;
//   console.log("file a", data1);
//   fs.readFile("a.txt", "utf-8", (err, data2) => {
//     if (err) throw err;
//     console.log("file b", data2);
//     fs.readFile("a.txt", "utf-8", (err, data3) => {
//       if (err) throw err;
//       console.log("file c", data3);
//       console.log(data3);
//     });
//   });
// });

//read files using promises

// const fs = require("fs").promises;
// fs.readFile("a.txt", "utf-8")
//   .then((data1) => {
//     console.log("file data", data1);
//     return fs.readFile("b.txt", "utf-8");
//   })
//   .then((data2) => {
//     console.log("file b", data2);
//     return fs.readFile("c.txt", "utf-8");
//   })
//   .then((data3) => {
//     console.log("file c", data3);
//   })
//   .catch((err) => {
//     console.log("err msg", err);
//   });

//*****read file using async-await */

const fs = require("fs").promises;

async function readfile() {
  try {
    const data1 = await fs.readFile("a.txt", "utf-8");
    console.log(data1);

    const data2 = await fs.readFile("b.txt", "utf-8");
    console.log(data2);

    const data3 = await fs.readFile("c.txt", "utf-8");
    console.log(data3);
  } catch (err) {
    console.log(err);
  }
}
readfile();
