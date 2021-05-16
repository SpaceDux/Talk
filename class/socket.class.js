const io = require('socket.io-client');

let thisclass = {
  Init: function() {
    conn = io(`ws://localhost:3000`, {forceNew:true});

    conn.on("connect", () => {
      console.log("Connection Established");
    });
  }
}


module.exports = thisclass;
