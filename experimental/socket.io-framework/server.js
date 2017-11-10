const request = require('request')

const Pusher = require('pusher-js');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socketio-framework')

const liveTrade = require('./dbModels/liveTrade')

const express = require('express')
const app = express()
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

const utility = require('./utility')

const port = 3000

let lastResponse = '';

// SOCKET.IO
io.on('connection', socket => {
  utility.print('New socket connected. Socket ID')(socket.id)

  socket.emit('newPrice', lastResponse)

  socket.on('disconnect', text => utility.print('Socket disconnected')(socket.id))
});

const socket = new Pusher('de504dc5763aeef9ff52');
const pusherChannel = socket.subscribe('live_orders');
['order_created', 'order_changed', 'order_deleted'].forEach(event =>
  pusherChannel.bind(event, function(data) {
    new liveTrade(data).save().catch(console.log)
    // placeholder.append('<li>[' + event + '] (' + data.datetime + ') ' + data.id + ': ' + data.amount + ' BTC @ ' + data.price + ' USD ' + ((data.order_type == 0) ? 'BUY' : 'SELL') + '</li>');
  })
)



setInterval(() => {
  request('https://www.bitstamp.net/api/v2/ticker/btceur', (error, response, body) => {
    if (response && response.statusCode == 200) {
      try {
        body = JSON.parse(body)
        // if (body !== lastResponse) {
        lastResponse = body
        io.emit('newPrice', body)
        // }
      } catch (
        error
      ) {
        console.log('json parse error', error);
      }
    } else {
      console.log('response code', response.statusCode)
      console.log('error', error)
    }
  });
}, 2000)

// EXPRESS ROUTES
app.use('/', express.static('UI'))

// app.get('/', (req, res, next) => {
//   res.sendFile(__dirname + '/UI/index.html');
// })

httpServer.listen(port, () => console.log('server started on port', port))
