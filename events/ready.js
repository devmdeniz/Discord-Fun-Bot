const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const settings = require('../settings.json');
var version = settings.version
var prefix = settings.prefix;

module.exports = client => {
client.user.setActivity(""+prefix+"help", {
  type: "STREAMING",
  url: "https://www.twitch.tv/eastromtv"
});
  
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Commands Loaded!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Logged In!`);
  client.user.setStatus("LISTENING");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Game Activity Setted!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Now we have ` + client.channels.size + ` Channels, ` + client.guilds.size + ` Guilds and ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Users!`);

};
