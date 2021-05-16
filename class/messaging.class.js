var author = 'SpaceDux';
let thisclass = {
  SendMessage: function(message, author, channel = 1) {
    return new Promise(function(resolve, reject) {
      socket_class.SendMessage(message, author, channel)
      .then(() => {
        resolve();
      })
    });
  }
}


module.exports = thisclass;
