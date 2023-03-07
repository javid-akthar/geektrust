
function inBetweenCellsLength(srcXAxis,destXAxis,srcYAxis,destYAxis
    ) {
      const costOfTravellingPerCell = 10;
      let dist =
        (Math.abs(srcXAxis - destXAxis) +
          Math.abs(srcYAxis - destYAxis)) *
          costOfTravellingPerCell;
      return dist;
    }
    
    function rqdDirFinder(srcXAxis,destXAxis,srcYAxis,destYAxis) {
      let rqdDir = "";
      if (srcXAxis == destXAxis) {
        if (srcYAxis - destYAxis > 0) {
          rqdDir = "S";
        } else if (srcYAxis - destYAxis < 0) {
          rqdDir = "N";
        }
      } else if (srcYAxis == destYAxis) {
        if (srcXAxis - destXAxis > 0) {
          rqdDir = "W";
        } else if (srcXAxis - destXAxis < 0) {
          rqdDir = "E";
        }
      }
      return rqdDir;
    }
    
    function directionOptions(srcXAxis,destXAxis,srcYAxis,destYAxis) {
      if (destYAxis > srcYAxis) {
        option1 = "N";
      } else if (destYAxis < srcYAxis) {
        option1 = "S";
      }
    
      if (destXAxis > srcXAxis) {
        option2 = "E";
      } else {
        option2 = "W";
      }
    
      return { option1,option2,};
    }

module.exports = {inBetweenCellsLength,rqdDirFinder,directionOptions};
   