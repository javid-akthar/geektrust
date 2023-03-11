const chai = require("chai");
const expect = chai.expect;
const {Axis} = require('./models/axisClass');

let { remainingPowerFinder,remainingPower } = require("./controller/remainingPowerFinder");
const {
  directionArray,
  gManPwrVal,
  AxisArray,
  inputArray
} = require("./testingData");

describe("Test Suite", function () {
  it("Test the gManPower method", function () {
    const axis = new Axis(...AxisArray[0], directionArray[0])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[0]
    );
  });

  it("Testing the power Derivation 1", function(){
    const axis = new Axis(...AxisArray[1], directionArray[1])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[1]
    );
  })
  it("Testing the power Derivation 2", function(){
    const axis = new Axis(...AxisArray[2], directionArray[2])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[2]
    );
  })
  it("Testing the power Derivation 3", function(){
    const axis = new Axis(...AxisArray[3], directionArray[0])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[3]
    );
  })
  it("Testing the power Derivation 4", function(){
    const axis = new Axis(...AxisArray[4], directionArray[3])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[4]
    );
  })
  it("Testing the power Derivation 5", function(){
    const axis = new Axis(...AxisArray[5], directionArray[3])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[5]
    );
  })
  it("Testing the power Derivation 6", function(){
    const axis = new Axis(...AxisArray[6], directionArray[0])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[6]
    );
  })
  it("Testing the power Derivation 7", function(){
    const axis = new Axis(...AxisArray[7], directionArray[0])
    expect(remainingPower(axis)).to.be.equal(
      gManPwrVal[7]
    );
  })
  it("Testing the power Derivation 8", function(){
    expect(remainingPowerFinder(inputArray)).to.be.equal(gManPwrVal[8]);
  });
});
