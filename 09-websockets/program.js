var socket = require('websocket-stream');
var stream = socket('ws://localhost:8000');
stream.end('hello\n');