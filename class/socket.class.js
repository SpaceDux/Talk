const io = require('socket.io-client');
let conn;
var msgArray = [];

let thisclass = {
  Init: function() {
    conn = io(`ws://talk.3264.uk`, {forceNew:true});

    conn.on("connect", () => {
      console.log("Connection Established");
    });

    conn.on('Message-Received', (data) => {
      console.log(data)
      msgArray.push(data);
      thisclass.SortAndPrintMessages(msgArray);
    })
  },
  // Messaging
  SendMessage: function(message, channel) {
    return new Promise(function(resolve, reject) {
      conn.emit("Message-Send", {"Token":config.Token, "message":message, "channel":channel});
      resolve();
    });
  },
  SortAndPrintMessages: function(array) {
    let html = '';
    array.forEach((row) => {
      html += `<div class="messageBox">
                  <div class="author">
                    ${row.author}
                    <i class="fas fa-crown get-away"></i>
                  </div>
                  ${row.message}
                </div>`;
    })

    let elem = document.querySelector('.messageHolder');
    elem.innerHTML = html;

    var anchor = document.querySelector('.messageHolder');
    anchor.scrollTop = anchor.scrollHeight - anchor.clientHeight;

  },
  // Users
  User_Login: function(user, pass) {
    return new Promise(function(resolve, reject) {
      conn.emit("User-Authenticate", {"username":user, "password":pass});

      conn.on("User-Authenticate_Reply", (data) => {
        resolve(data);
      })
    });
  },
  User_CheckToken: function(token) {
    return new Promise(function(resolve, reject) {
      conn.emit("User-CheckToken", {"Token":token});

      conn.on("User-CheckToken_Reply", (data) => {
        resolve(data);
      })
    });
  }
}


module.exports = thisclass;
