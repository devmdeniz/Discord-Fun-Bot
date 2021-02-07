const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
  message.channel.send("please wait a couple second")    
  message.channel.send(
            randomstring.generate({
            length: 12,
            charset: 'alphabetic'
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'randompassword',
  description: '',
  usage: ''
};