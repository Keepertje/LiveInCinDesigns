var fs = require('fs');
var path = require('path');

var files = fromDir('../', '-template.html', []);

files.forEach((file) => {
  fs.readFile(file, 'utf8', function (err, contents) {
    console.log('-- replacing file:', file);
    pattern = /\${(.*?)\}/gm;
    var matches = contents.match(pattern);

    matches.forEach((match) => {
      var fileData = findFile(match);

      var substr = match.substr(2, match.length - 3);
      var regex = new RegExp("\\${(" + substr + ")\\}", 'gm');
      console.log('-- -- replacing object:', match);
      contents = contents.replace(regex, fileData);
    });
    writeFile(file, contents);

  });
});

function findFile(match) {
  var substr = match.substr(2, match.length - 3);
  return fs.readFileSync(`${substr}.lckd`, 'utf8');
}

function writeFile(filename, newContent) {
  var newFile = filename.replace('-template', '');
  console.log('-- -- writing to object:', newFile);
  fs.writeFileSync(newFile, newContent);
}


function fromDir(startPath, filter, filesToReturn) {

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      filesToReturn.push(...fromDir(filename, filter, [])); //recurse
    }
    else if (filename.indexOf(filter) >= 0) {
      console.log('-- found: ', filename);
      filesToReturn.push(filename);
    };
  };
  return filesToReturn;
};
