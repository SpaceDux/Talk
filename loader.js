const config = require("./config.json")
const socket_class = require("./class/socket.class.js")
const messaging_class = require("./class/messaging.class.js")
const users_class = require("./class/users.class.js")
console.log(config.Token)
socket_class.Init()
if(config.Token !== "") {
  // Check token valid
  users_class.CheckToken()
  .then((result) => {
    if(result.Result > 0) {
      alert("Logged in")
      // Show main page
    } else {
      alert("Please Authenticate")
      // Show Login Page
    }
  })
} else {
  // Straight to Login Page
}
