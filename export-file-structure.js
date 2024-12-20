const fs = require('fs');
const path = require('path');

function readDirRecursive(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(function(file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results.push({
        name: file,
        type: 'directory',
        children: readDirRecursive(filePath)
      });
    } else {
      results.push({
        name: file,
        type: 'file'
      });
    }
  });

  return results;
}

const dirPath = path.join('./src'); // Change this to your desired directory
const structure = readDirRecursive(dirPath);

fs.writeFileSync('structure.json', JSON.stringify(structure, null, 2));
console.log('Structure exported to structure.json');
