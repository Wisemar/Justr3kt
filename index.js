const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setgame("Développeur = Wisemar");
    console.log("Bot ON");
});

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "Leader"){
        msg.reply("@✘ Leader-JustR3kt ✘ ")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "help"){
        msg.channel.send("1. Leader 2./help 3.")
        console.log("Une personne a demandé help.")
    }

});

bot.login("NTEwNDk5ODY0ODgzMzYzODYw.DsdP3Q.rVOYL8Uf3JdZ6khjyfu3i8cGaP0");
