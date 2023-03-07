const fs = require("fs");
const { gManPowerFinder } = require("./controller/gManPowerFinder");
let filename = "";
try {
  filename = process.argv[2];
} catch (err) {console.log(err)}

if (filename)
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    try {
      let inputArr = [];
      data.split(/\r?\n/).forEach((item)=>
      {
        item = item.trim()
        inputArr = inputArr.concat(item.split(" "));
      });
      gManPowerFinder(inputArr);
    } catch (err) {
      console.log(err);
      console.log("please give the input in correct format");
    }
  });

