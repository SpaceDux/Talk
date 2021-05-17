let thisclass = {
  SendMessage: function(message, channel = 1) {
    return new Promise(function(resolve, reject) {
      socket_class.SendMessage(message, channel)
      .then(() => {
        resolve();
      })
    });
  }
}


module.exports = thisclass;
