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
  SendMessage: function(message, author, channel) {
    return new Promise(function(resolve, reject) {
      conn.emit("Message-Send", {"message":message, "author":author, "channel":channel});
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

  }
}


module.exports = thisclass;
