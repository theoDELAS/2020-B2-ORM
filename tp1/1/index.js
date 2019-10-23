const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let gain = 0
    let place = input[0]
    console.log(place);
    
    for (let i = 1; i < input.length; i++) {
      const element = input[i];
      place += parseInt(element.substring(0, 1) - (element.substring(2, 3)));
    }
    
    if (place <= 100) {
      gain += 1000
      return gain;
    } else if (place > 100 && place < 10000) {
      gain += 100
      return gain;
    } else {
      gain = "KO"
      return gain;
    }
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}