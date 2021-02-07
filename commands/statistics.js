const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const client = new Discord.Client()
const fs = require('fs');
const settings = require('../settings.json')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  
exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [Day], H [Hour], m [Minute], s [Second]");
  msg.channel.send(`
• ***RAM Usage***            ⇨ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• ***Working Time***              ⇨ ${duration}
• ***Ping***                            ⇨ ${client.ping}
• ***Servers***                       ⇨ ${client.guilds.size.toLocaleString()}
• ***Channels***                          ⇨ ${client.channels.size.toLocaleString()}
• ***Bot Version***              ⇨  ${settings.surum} 
• ***Total Command Size***   ⇨  ${files.length} 
`);
}});

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'statistics',
  description: '',
  usage: ''
};
