var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(){ console.log('GREATO SUCCESSERU! Connection established.'); });

let data = [];

const emitList = (time) => {
  const timeInMilliseconds = time * 1000;

  setTimeout(() => {
    data.push({ time: timeInMilliseconds });
    io.emit('list', data);
  }, timeInMilliseconds);
};

setInterval(() => {
  let timeout = Math.floor(Math.random() * 10) + 1;
  emitList(timeout);
}, 2500);

server.listen(3001);
