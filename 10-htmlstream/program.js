var through = require('through');
var trumpet = require('trumpet');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buffer) {
	this.queue(buffer.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);