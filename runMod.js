var modular = require('./modular')

modular(process.argv[2], process.argv[3], function(err, list){
  if (err) return console.error(err);
  console.log(list.join('\r\n'));
});