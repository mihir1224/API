// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is mihirrrrr.");

// const getNotes = require("./challenge.js");

// fs.appendFileSync("notes.txt", " i am 21 years old.");

// const buf_data = fs.readFileSync("notes.txt");
// console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync("notes.txt", "Note.txt");

// const aa = require("./challenge");
// const validator = require("validator");
// const msg = aa();
// console.log(msg);

// console.log(validator.isURL("https/mean.io"));

// const chalk = require('chalk')

// const msg = chalk.bold.green("success!")
// console.log(msg);

const http = require("http");
http
  .createServer((req, res) => {
    res.write("Hello! How Are You?");
    res.end();
  })
  .listen(3000);
