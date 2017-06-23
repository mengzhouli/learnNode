var http = require('http');
var concat = require('concat-stream');
var urls = process.argv.splice(2);
var q = [];
var count = 0;

function reading(i) {
  http.get(urls[i], function(response){
    response.pipe(concat(function(data) {
      q[i] = data.toString();
      count ++;
      if (count === 3) {
        q.forEach(function(line) {
          console.log(line);
        });
      };
    }));
    response.on('error', console.error);
  }).on('error', console.error);
}

for (var i = 0; i<urls.length; i++) {
  reading(i);
}

// can be done easier with async or after modules