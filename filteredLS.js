var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2], 'utf8', function(error, list) {
  if (error) return console.error(error);
  var newList = list.filter(function(title) {
    return path.extname(title).includes(process.argv[3]);
  });
  console.log(newList.join('\r\n'));
});