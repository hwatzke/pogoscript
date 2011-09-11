var fs = require('fs');
var parser = require('./parser');

var filename = process.argv[2];
var filenames = process.argv.splice(2);

var compile = function (filename) {
  fs.readFile(filename, 'utf-8', function (err, contents) {
    if (!err) {
      var term = parser.parse(parser.module, contents);
      var jsFilename = filename.replace(/\.jungle$/, '.js');
      var stream = fs.createWriteStream(jsFilename);
      stream.on('open', function (fd) {
        term.generateJavaScript(stream);
        stream.write('\n');
      });
    } else {
      console.log(err.message);
    }
  });
};

for (var f in filenames) {
  var filename = filenames[f];
  compile(filename);
  fs.watchFile(filename, function () {
    compile(filename);
  });
}
