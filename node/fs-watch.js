const fs = require('fs');

fs.watch('./test', (event, fileName) => {
  console.log(fileName);
});
