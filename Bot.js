const Discord = require("discord.js");

const TOKEN = "MzMwNDE0MTU3MDA0NTM3ODY3.DDgpsQ.tWKQKydWgZsjXFNcLzaVAH4wY6E"

var bot = new Discord.Client();



bot.login(TOKEN);

bot.on("ready", function() {

console.log("Ready");
bot.user.setGame("Erik Is Gay");
})
  bot.on('message', (message) => {
    if (message.content === "!!Erik Is Gay")
      var interval = setInterval (function () {
          message.channel.send("@Vaffel Politiet#6147")
          message.channel.sendFile("./assets/day_15.gif","day.gif","gays")
        }, 1 * 86400000);

  });
