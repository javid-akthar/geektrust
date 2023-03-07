const fs = require("fs");
const { gManPower } = require("./g_man_power");
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
      
      for (let i = 0; i < inputArr.length; ) {
        let srcXAxis = inputArr[i + 1];
        let srcYAxis = inputArr[i + 2];
        let initDir = inputArr[i + 3];
        let destXAxis = inputArr[i + 5];
        let destYAxis = inputArr[i + 6];
        power = gManPower(
          srcXAxis,
          destXAxis,
          srcYAxis,
          destYAxis,
          initDir
        );
        if (Number.isInteger(power)) console.log("POWER " + power);
        else {
          console.log(
            "POWER " + power + "  --please give the input in correct format"
          );
        }
        i = i + 8;
      }
    } catch (err) {
      console.log(err);
      console.log("please give the input in correct format");
    }
  });
