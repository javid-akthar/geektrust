let {gManPower} = require('./g_man_power');
function gManPowerFinder(inputArr){
    try{
      const nxtInp = 8;
      for (let i = 0; i < inputArr.length; ) {
        let srcXAxis = inputArr[i + 1];
        let srcYAxis = inputArr[i + 2];
        let initDir = inputArr[i + 3];
        let destXAxis = inputArr[i + 5];
        let destYAxis = inputArr[i + 6];
        power = gManPower(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir);
        if (Number.isInteger(power)) console.log("POWER " + power);
        else {
          console.log(
            "POWER " + power + "  --please give the input in correct format"
          );
        }
        i = i + nxtInp;
      }
    }catch(err){
      console.log(err);
    }
  }  

module.exports = {gManPowerFinder}  