const io = require('socket.io-client');

let thisclass = {
  Init: function() {
    conn = io(`ws://talk.3264.uk`, {forceNew:true});

    conn.on("connect", () => {
      console.log("Connection Established");
    });
  }
}


module.exports = thisclass;
