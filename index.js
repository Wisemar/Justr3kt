const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur Justr3kt' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "créateur"){
        msg.channel.send("Le créateur est Wisemar")
        console.log("Une personne a demandé createur.")
    }

});

bot.login(cfg.token); //a garder en version desktop
bot.login(token); //a garder en version heroku
