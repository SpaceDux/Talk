const io = require('socket.io-client');

let thisclass = {
  Init: function() {
    conn = io(`ws://talk.3264.uk`, {forceNew:true});

    conn.on("connect", () => {
      console.log("Connection Established");
    });


    conn.emit('Message-Send', {"Message":"Hello world."});

    conn.on('Message-UpdateFeed', (data) => {
      console.log(data);
    })
  }
}


module.exports = thisclass;
