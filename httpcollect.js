var http = require('http');

var stuff = http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  var total = '';
  response.on('data', function(chunk){
    total += chunk;
  });
  response.on('end', function(){
    console.log(total.length);
    console.log(total);
  });
  response.on('error', console.error);
}).on('error', console.error);

//using the bl module
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

//using the concat-stream module
// var concat = require('concat-stream');

// http.get(process.argv[2], function(response){
//   response.pipe(concat(function (data) {
//     let dataString = data.toString();
//     console.log(dataString.length);
//     console.log(dataString);
//   }));
//   response.on('error', console.error);
// }).on('error', console.error);