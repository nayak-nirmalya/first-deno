const fs = require('fs').promises

const text = 'This text should be stored inside a file.'

fs.writeFile('node-message.txt', text).then(() => {
  console.log('Wrote File Successfully!')
})
