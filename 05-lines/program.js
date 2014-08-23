var split = require('split');
var through = require('through');

var count = 0;
var data = through(function (buffer) {
	var line = buffer.toString();
	this.queue(count % 2 === 0 ? 
		line.toLowerCase() + '\n': 
		line.toUpperCase() + '\n'
	);
	count++;
});

process.stdin
  .pipe(split())
  .pipe(data)
  .pipe(process.stdout);