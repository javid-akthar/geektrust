const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");

chai.use(deepEqualInAnyOrder);

const expect = chai.expect;
let {
  inBetweenCellsLength,
  rqdDirFinder,
  directionOptions,
  sameAxis,
  differentAxis,
  gManPower,
} = require("./g_man_power");
console.log(gManPower);
console.log(inBetweenCellsLength);

describe("Test Suite", function () {
  it("Test the inBetweenCellsLength Method", function () {
    expect(inBetweenCellsLength(2, 4, 1, 3)).to.be.equal(40);
    expect(inBetweenCellsLength(0, 6, 5, 1)).to.be.equal(100);
    expect(inBetweenCellsLength(3, 1, 6, 0)).to.be.equal(80);
    expect(inBetweenCellsLength(2, 4, 1, 1)).to.be.equal(20);
    expect(inBetweenCellsLength(2, 4, 1, 5)).to.be.equal(60);
    expect(inBetweenCellsLength(0, 6, 6, 6)).to.be.equal(60);
    expect(inBetweenCellsLength(1, 5, 3, 3)).to.be.equal(40);
    expect(inBetweenCellsLength(5, 1, 3, 3)).to.be.equal(40);
  });
  it("Test the rqdDirFinder method", function () {
    expect(rqdDirFinder(2, 4, 1, 1)).to.be.equal("E");
    expect(rqdDirFinder(0, 6, 6, 6)).to.be.equal("E");
    expect(rqdDirFinder(1, 5, 3, 3)).to.be.equal("E");
    expect(rqdDirFinder(5, 1, 3, 3)).to.be.equal("W");
  });
  it("Test the directionOptions method", function () {
    expect(directionOptions(2, 4, 1, 3)).to.deep.equalInAnyOrder({
      option1: "N",
      option2: "E",
    });
    expect(directionOptions(0, 6, 5, 1)).to.deep.equalInAnyOrder({
      option1: "S",
      option2: "E",
    });
    expect(directionOptions(3, 1, 6, 0)).to.deep.equalInAnyOrder({
      option1: "S",
      option2: "W",
    });
    expect(directionOptions(2, 4, 1, 5)).to.deep.equalInAnyOrder({
      option1: "N",
      option2: "E",
    });
  });
  it("Test the sameAxis method", function () {
    expect(sameAxis(2, 4, 1, 1, "E")).to.be.equal(180);
    expect(sameAxis(0, 6, 6, 6, "S")).to.be.equal(135);
    expect(sameAxis(1, 5, 3, 3, "E")).to.be.equal(160);
    expect(sameAxis(5, 1, 3, 3, "E")).to.be.equal(150);
  });
  it("Test the differentAxis method", function () {
    expect(differentAxis(2, 4, 1, 3, "E")).to.be.equal(155);
    expect(differentAxis(0, 6, 5, 1, "W")).to.be.equal(90);
    expect(differentAxis(3, 1, 6, 0, "N")).to.be.equal(110);
    expect(differentAxis(2, 4, 1, 5, "S")).to.be.equal(130);
  });
  it("Test the gManPower method", function () {
    expect(gManPower(2, 4, 1, 3, "E")).to.be.equal(155);
    expect(gManPower(0, 6, 5, 1, "W")).to.be.equal(90);
    expect(gManPower(3, 1, 6, 0, "N")).to.be.equal(110);
    expect(gManPower(2, 4, 1, 1, "E")).to.be.equal(180);
    expect(gManPower(2, 4, 1, 5, "S")).to.be.equal(130);
    expect(gManPower(0, 6, 6, 6, "S")).to.be.equal(135);
    expect(gManPower(1, 5, 3, 3, "E")).to.be.equal(160);
    expect(gManPower(5, 1, 3, 3, "E")).to.be.equal(150);
  });
});
