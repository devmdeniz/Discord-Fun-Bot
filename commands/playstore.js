const Discord = require("discord.js");
const gplay = require('google-play-scraper')

exports.run = function(client, message, args) {
  var prefix = settings.prefix
 
  const  uyg = args.join(' ')
 
        if (!uyg) return message.channel.send("Please write a app name")
        if (uyg) {
         
                gplay.search({
                lang: 'en',
                term: uyg,
                country: 'us',
                fullDetail: true
                 
           
                 
            }).then((x) => {      
                const game = x[0]
               
                var bymayfe = game.editorsChoice
               
                if(bymayfe === true) {
                bymayfe = "Editor's choice"
                } else {
                  bymayfe = "No"                  
                }
               
                const gameEmbed = new Discord.RichEmbed()
                    .setTitle(game.title)
                    .setDescription(game.summary + `\n\n[Ziyaret İçin Tıkla](${game.url})`)
                    .addField("Score: ", game.scoreText, true)
                    .addField("Pricing: ", game.priceText, true)
                    .addField("Download: ", game.installs, true)
                    .addField("Developer: ", game.developer, true)
                    .addField("Size: ", game.size, true)
                    .addField("Editor's choice ?: ", bymayfe, true)
                    .setThumbnail(game.icon)
                    .setTimestamp(Date())
                    .setColor(0x008000)
                return message.channel.send(gameEmbed)
            })
        }
}
       
 
 
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["play-store"],
  permLevel: 0
};
 
exports.help = {
  name: "playstore",
  description: "",
  usage: ""
};