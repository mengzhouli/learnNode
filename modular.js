var fs = require('fs');
var path = require('path');

module.exports = function(filePath, extension, callback) {
  fs.readdir(filePath, 'utf8', function(err, list) {
    if (err) return callback(err);
    var newList = list.filter(function(title) {
      return path.extname(title).includes(extension);
    });
    callback(null, newList);
  });
};