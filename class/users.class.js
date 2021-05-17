let fs = require("fs")

let thisclass = {
  Login: function(username, password) {
    return new Promise(function(resolve, reject) {
      socket_class.User_Login(username, password)
      .then((result) => {
        if(result.Result == 1) {
          fs.writeFile('./config.json', JSON.stringify({"Token":result.Token}), err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote to file')
            }
          })
          console.log(result.Message)
        } else {
          console.log(result.Message)
        }
      })
    });
  },
  CheckToken: function() {
    return new Promise(function(resolve, reject) {
      socket_class.User_CheckToken(config.Token)
      .then((data) => {
        resolve(data)
      })
    });
  }
}


module.exports = thisclass;
