const Discord = require('discord.js');
const settings = require('../settings.json')

exports.run = (client, message, args) => {

  
    if (!message.guild) {
	  return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('BOT')
	  .setDescription(message.author.username + ', You can not use this command here.')
	  .setFooter(settings.sbot, client.user.avatarURL)
	  .setTimestamp());
	 }

	let user = message.mentions.users.first();
	
	if (message.mentions.users.size < 2)
	 return message.channel.send(new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('1vs1')
	 .setDescription(message.author.tag + ', Usage: '+ settings.prefix + exports.help.name +'<@firstuser> <@seconduser> .')
	 .setFooter(settings.sbot, client.user.avatarURL)
	 .setTimestamp());

    var luck = ["10","1","20","30"]
	var result = luck[Math.floor((Math.random() * luck.length))];
	
	  message.channel.send(new Discord.RichEmbed()
	  .setColor('RANDOM')
	  .setTitle('1vs1')
	  .setDescription('Fight Started!')
	  .setFooter('The Fight is now started.', client.user.avatarURL).setTimestamp())
	 
	  .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM')
	  
	  .setTitle('1vs1')
	  .setDescription('They are now Fighthing!')
	  .setFooter('The Big Fight', client.user.avatarURL)
	  .setTimestamp()))

	  .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM')
	  
	  .setTitle('1vs1')
	  .setDescription('They are now Fighthing!')
	  .setFooter('The Big Fight', client.user.avatarURL)
	  .setTimestamp()))
	  
	  .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM')
	  
	  .setTitle('1vs1')
	  .setDescription('They are now Fighthing!')
	  .setFooter('The Big Fight', client.user.avatarURL)
	  .setTimestamp()))

	  .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM')
	  
	  .setTitle('1vs1')
	  .setDescription('Fight is now OVER!')
	  .setFooter('The Big Fight', client.user.avatarURL).setTimestamp()))

	  .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM')
	  
	  .setTitle('1vs1')
	  .setDescription('Fight is now OVER!')
	  .setFooter('Fight is now over', client.user.avatarURL).setTimestamp()))

	  .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM')
	  
	  .setTitle('1vs1')
	  .setDescription('Winner: **' + user.tag + '** Congratilations! You decreased the man\'s health to **'+ result +'** and The man surrendered  ' + user.tag+'!')
	  .setImage("https://media1.giphy.com/media/6fReqjdbFYXJu/giphy.gif").setFooter('A Fight was made.', client.user.avatarURL).setTimestamp()))
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '1vs1',
  description: '',
  usage: ''
};
