const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
  // YOUR CODE BETWEEN HERE
  let poids = 0
  let nbVoyages = 1
  for (let i = 1; i < input.length + 1; i++) {
    const element = input[i];
    if (poids <= 100) {
      poids += element
    } else {
      nbVoyages += 1
      poids += element - 100
    }
  }
  return nbVoyages
    
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