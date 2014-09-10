var zlib = require('zlib');
var tar = require('tar');
var crypto = require('crypto');
var through = require('through');

var parser = tar.Parse();
parser.on('entry', function (event) {
	if (event.type !== 'File') return;

  var hash = crypto.createHash('md5', { encoding: 'hex' });
  event.pipe(hash).pipe(through(null, end)).pipe(process.stdout);
  
  function end () { 
  	this.queue(' ' + event.path + '\n') 
  }
});

var cipher = process.argv[2];
var passwd = process.argv[3];

process.stdin.pipe(crypto.createDecipher(cipher, passwd)).pipe(zlib.createGunzip()).pipe(parser);