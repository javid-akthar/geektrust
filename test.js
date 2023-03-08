const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const expect = chai.expect;

let { remainingPower } = require("./controller/remainingPower");
const {
  directionArray,
  gManPwrVal,
  AxisArray,
} = require("./testingData");

describe("Test Suite", function () {
  it("Test the gManPower method", function () {
    expect(remainingPower(...AxisArray[0], directionArray[0])).to.be.equal(
      gManPwrVal[0]
    );
    expect(remainingPower(...AxisArray[1], directionArray[1])).to.be.equal(
      gManPwrVal[1]
    );
    expect(remainingPower(...AxisArray[2], directionArray[2])).to.be.equal(
      gManPwrVal[2]
    );
    expect(remainingPower(...AxisArray[3], directionArray[0])).to.be.equal(
      gManPwrVal[3]
    );
    expect(remainingPower(...AxisArray[4], directionArray[3])).to.be.equal(
      gManPwrVal[4]
    );
    expect(remainingPower(...AxisArray[5], directionArray[3])).to.be.equal(
      gManPwrVal[5]
    );
    expect(remainingPower(...AxisArray[6], directionArray[0])).to.be.equal(
      gManPwrVal[6]
    );
    expect(remainingPower(...AxisArray[7], directionArray[0])).to.be.equal(
      gManPwrVal[7]
    );
  });
});
