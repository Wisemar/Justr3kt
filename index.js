const discord = require("discord.js");

const prefix = ("/");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setgame("En cour de dev, par wisemar");
    console.log("Bot ON");
});

bot.login("NTEwNDk5ODY0ODgzMzYzODYw.DsdP3Q.rVOYL8Uf3JdZ6khjyfu3i8cGaP0");





