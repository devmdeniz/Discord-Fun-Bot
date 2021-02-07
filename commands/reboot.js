const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Reboot?**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "yes", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **Rebooted** :ok_hand:   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :space_invader: **Restarting** :space_invader:`)
      process.exit(0);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('ERROR');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '',
  usage: ''
};