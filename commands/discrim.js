const Discord = require('discord.js');
const settings = require('../settings.json');
   
exports.run = function(client, msg) {
  
  
   const discrim = msg.content.split(' ')[1]
   
   if (!discrim) return msg.channel.send("Please write a discrim (Discord Tag) for ex: 1234")
   if (typeof discrim !== '')
   if (discrim.size < 4 || discrim.size > 4) return msg.channel.send(" **Discrim must be have 4 number**")
     let members = client.users.filter(c=>c.discriminator===discrim).map(c=>c.username).join('\n')
     if (!members) return msg.channel.send(`${hata}` + "There is no one with this discrim on the server I am on")
   let embed = new Discord.RichEmbed()
     .setTitle("Discrim")
     .setDescription('#' + `${discrim}` + "**Users**")
     .addField("Users", members)
     .setColor("ff00ff")
      msg.channel.send({embed: embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'discrim',
  description: '',
  usage: ''
};