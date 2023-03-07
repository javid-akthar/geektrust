const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");

chai.use(deepEqualInAnyOrder);

const expect = chai.expect;
let {
  sameAxis,
  differentAxis,
  gManPower,
} = require("./controller/g_man_power");
const {inBetweenCellsLength,rqdDirFinder,directionOptions} = require('./controller/PowerUtil');


const  inBtwCells = [40, 100, 80, 20, 60, 60, 40, 40];
const dirArr = ['E','W','N','S'];
const sameAxisVal = [180,135,160,150];
const diffAxisVal = [155,90,110,130];
const gManPwrVal = [155,90,110,180,130,135,160,150]
describe("Test Suite", function () {
  it("Test the inBetweenCellsLength Method", function () {
    expect(inBetweenCellsLength(2, 4, 1, 3)).to.be.equal(inBtwCells[0]);
    expect(inBetweenCellsLength(0, 6, 5, 1)).to.be.equal(inBtwCells[1]);
    expect(inBetweenCellsLength(3, 1, 6, 0)).to.be.equal(inBtwCells[2]);
    expect(inBetweenCellsLength(2, 4, 1, 1)).to.be.equal(inBtwCells[3]);
    expect(inBetweenCellsLength(2, 4, 1, 5)).to.be.equal(inBtwCells[4]);
    expect(inBetweenCellsLength(0, 6, 6, 6)).to.be.equal(inBtwCells[5]);
    expect(inBetweenCellsLength(1, 5, 3, 3)).to.be.equal(inBtwCells[6]);
    expect(inBetweenCellsLength(5, 1, 3, 3)).to.be.equal(inBtwCells[6]);
  });
  it("Test the rqdDirFinder method", function () {
    expect(rqdDirFinder(2, 4, 1, 1)).to.be.equal(dirArr[0]);
    expect(rqdDirFinder(0, 6, 6, 6)).to.be.equal(dirArr[0]);
    expect(rqdDirFinder(1, 5, 3, 3)).to.be.equal(dirArr[0]);
    expect(rqdDirFinder(5, 1, 3, 3)).to.be.equal(dirArr[1]);
  });
  it("Test the directionOptions method", function () {
    expect(directionOptions(2, 4, 1, 3)).to.deep.equalInAnyOrder({
      option1: dirArr[2],
      option2: dirArr[0],
    });
    expect(directionOptions(0, 6, 5, 1)).to.deep.equalInAnyOrder({
      option1: dirArr[3],
      option2: dirArr[0],
    });
    expect(directionOptions(3, 1, 6, 0)).to.deep.equalInAnyOrder({
      option1: dirArr[3],
      option2: dirArr[1],
    });
    expect(directionOptions(2, 4, 1, 5)).to.deep.equalInAnyOrder({
      option1: dirArr[2],
      option2: dirArr[0],
    });
  });
  it("Test the sameAxis method", function () { 
    expect(sameAxis(2, 4, 1, 1, "E")).to.be.equal(sameAxisVal[0]);
    expect(sameAxis(0, 6, 6, 6, "S")).to.be.equal(sameAxisVal[1]);
    expect(sameAxis(1, 5, 3, 3, "E")).to.be.equal(sameAxisVal[2]);
    expect(sameAxis(5, 1, 3, 3, "E")).to.be.equal(sameAxisVal[3]);
  });
  it("Test the differentAxis method", function () { 
    expect(differentAxis(2, 4, 1, 3, "E")).to.be.equal(diffAxisVal[0]);
    expect(differentAxis(0, 6, 5, 1, "W")).to.be.equal(diffAxisVal[1]);
    expect(differentAxis(3, 1, 6, 0, "N")).to.be.equal(diffAxisVal[2]);
    expect(differentAxis(2, 4, 1, 5, "S")).to.be.equal(diffAxisVal[3]);
  });
  it("Test the gManPower method", function () { 
    expect(gManPower(2, 4, 1, 3, "E")).to.be.equal(gManPwrVal[0]);
    expect(gManPower(0, 6, 5, 1, "W")).to.be.equal(gManPwrVal[1]);
    expect(gManPower(3, 1, 6, 0, "N")).to.be.equal(gManPwrVal[2]);
    expect(gManPower(2, 4, 1, 1, "E")).to.be.equal(gManPwrVal[3]);
    expect(gManPower(2, 4, 1, 5, "S")).to.be.equal(gManPwrVal[4]);
    expect(gManPower(0, 6, 6, 6, "S")).to.be.equal(gManPwrVal[5]);
    expect(gManPower(1, 5, 3, 3, "E")).to.be.equal(gManPwrVal[6]);
    expect(gManPower(5, 1, 3, 3, "E")).to.be.equal(gManPwrVal[7]);
  });
});
