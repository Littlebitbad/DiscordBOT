const Discord = require("discord.js");

const TOKEN = "MzMwNDE0MTU3MDA0NTM3ODY3.DDgpsQ.tWKQKydWgZsjXFNcLzaVAH4wY6E"

var bot = new Discord.Client();



bot.login(TOKEN);

bot.on("ready", function() {

console.log("Ready");
bot.user.setGame("Erik Is Gay");
})
  bot.on('message', (message) => {
//message.react("™")

  });
