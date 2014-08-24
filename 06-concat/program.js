var concat = require('concat-stream');

process.stdin.pipe(concat(function (data) {
	var text = data.toString().split('').reverse().join('');
	console.log(text);
}));