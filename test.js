const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const expect = chai.expect;

let { gManPower } = require("./controller/gManPowerCal");
const { inBetweenCellsLength } = require("./controller/powerCalUtil");
const { directionFinder } = require("./controller/directionFinder");
const { directionOptions } = require("./controller/directionOptions");
const { inBtwCells, dirArr, gManPwrVal, AxisArray } = require("./testingData");

describe("Test Suite", function () {
  it("Test the inBetweenCellsLength Method", function () {
    expect(inBetweenCellsLength(...AxisArray[0])).to.be.equal(inBtwCells[0]);
    expect(inBetweenCellsLength(...AxisArray[1])).to.be.equal(inBtwCells[1]);
    expect(inBetweenCellsLength(...AxisArray[2])).to.be.equal(inBtwCells[2]);
    expect(inBetweenCellsLength(...AxisArray[3])).to.be.equal(inBtwCells[3]);
    expect(inBetweenCellsLength(...AxisArray[4])).to.be.equal(inBtwCells[4]);
    expect(inBetweenCellsLength(...AxisArray[5])).to.be.equal(inBtwCells[5]);
    expect(inBetweenCellsLength(...AxisArray[6])).to.be.equal(inBtwCells[6]);
    expect(inBetweenCellsLength(...AxisArray[7])).to.be.equal(inBtwCells[7]);
  });
  it("Test the directionFinder method", function () {
    expect(directionFinder(...AxisArray[3])).to.be.equal(dirArr[0]);
    expect(directionFinder(...AxisArray[5])).to.be.equal(dirArr[0]);
    expect(directionFinder(...AxisArray[6])).to.be.equal(dirArr[0]);
    expect(directionFinder(...AxisArray[7])).to.be.equal(dirArr[1]);
  });
  it("Test the directionOptions method", function () {
    expect(directionOptions(...AxisArray[0])).to.deep.equalInAnyOrder({
      option1: dirArr[2],
      option2: dirArr[0],
    });
    expect(directionOptions(...AxisArray[1])).to.deep.equalInAnyOrder({
      option1: dirArr[3],
      option2: dirArr[0],
    });
    expect(directionOptions(...AxisArray[2])).to.deep.equalInAnyOrder({
      option1: dirArr[3],
      option2: dirArr[1],
    });
    expect(directionOptions(...AxisArray[4])).to.deep.equalInAnyOrder({
      option1: dirArr[2],
      option2: dirArr[0],
    });
  });

  it("Test the gManPower method", function () {
    expect(gManPower(...AxisArray[0], dirArr[0])).to.be.equal(gManPwrVal[0]);
    expect(gManPower(...AxisArray[1], dirArr[1])).to.be.equal(gManPwrVal[1]);
    expect(gManPower(...AxisArray[2], dirArr[2])).to.be.equal(gManPwrVal[2]);
    expect(gManPower(...AxisArray[3], dirArr[0])).to.be.equal(gManPwrVal[3]);
    expect(gManPower(...AxisArray[4], dirArr[3])).to.be.equal(gManPwrVal[4]);
    expect(gManPower(...AxisArray[5], dirArr[3])).to.be.equal(gManPwrVal[5]);
    expect(gManPower(...AxisArray[6], dirArr[0])).to.be.equal(gManPwrVal[6]);
    expect(gManPower(...AxisArray[7], dirArr[0])).to.be.equal(gManPwrVal[7]);
  });
});
