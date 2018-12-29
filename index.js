function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {

    let start = parseInt(startingBlock);
    // parseInt parses a string and turns it into integer
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    // Math.abs returns an absolute number (a positive value)
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(rideFare) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
