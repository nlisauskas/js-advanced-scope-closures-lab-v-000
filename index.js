function produceDrivingRange(range) {
  return function(block1, block2) {
    const distance = parseInt(block1) - parseInt(block2)
    const positiveDistance = Math.abs(distance)

    if (positiveDistance > range) {
      return `${positiveDistance - range} blocks out of range`
    } else {
      return `within range by ${range - positiveDistance}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(billAmount) {
    return billAmount * percent
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
