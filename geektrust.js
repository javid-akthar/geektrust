const fs = require("fs");
const { remainingPowerFinder } = require("./controller/remainingPowerFinder");
let filename = "";
try {
  filename = process.argv[2];
} catch (err) {
  console.log(err);
}

if (filename)
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    let inputArr = [];
    data.split(/\r?\n/).forEach((item) => {
      item = item.trim();
      inputArr = inputArr.concat(item.split(" "));
    });
    remainingPowerFinder(inputArr);
  });
