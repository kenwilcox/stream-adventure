var through = require('through');
var data = through(function (buffer) {
	this.queue(buffer.toString().toUpperCase());
});
process.stdin.pipe(data).pipe(process.stdout);