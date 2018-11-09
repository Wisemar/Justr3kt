const discord = require("discord.js");

const prefix = ("/");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setgame("Développeur Wisemar");
    console.log("Bot ON");
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://alexpgm.000webhostapp.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login("NTEwNDk5ODY0ODgzMzYzODYw.DsdP3Q.rVOYL8Uf3JdZ6khjyfu3i8cGaP0");



