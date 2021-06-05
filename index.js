// Run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const fs = require('fs');
const readStream = fs.createReadStream('legend.srt');
let data;

readStream
  .on('data', chunk => {
    data += chunk;
  })
  .on('end', () => {
    data = data.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    fs.writeFileSync('legend-normailized.srt', data);
  });
