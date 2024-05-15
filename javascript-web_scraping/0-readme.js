const fs = require('fs');

function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content);
  } catch (err) {
    console.error(err);
  }
}

if (process.argv.length > 2) {
  const filePath = process.argv[2];
  readFile(filePath);
} else {
  console.error('Please provide a file path as an argument.');
}