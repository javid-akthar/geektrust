class Axis{
    constructor(sourceXAxis, destinationXAxis, sourceYAxis, destinationYAxis,initialDirection){
        this.sourceXAxis = sourceXAxis;
        this.destinationXAxis = destinationXAxis;
        this.sourceYAxis = sourceYAxis;
        this.destinationYAxis = destinationYAxis;
        this.initialDirection = initialDirection;
    }
}

module.exports = {Axis}