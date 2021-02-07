const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    if(game == "trash") {
      return game = "counter strike global offensive"
    } else {
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Please write a steam game')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "us", "en").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`Game ID`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Types', results.genres)
    .addField('Price', `Normal **${results.priceData.initialPrice}**$
 Discounted Price **${results.priceData.finalPrice}**$`, true)
    .addField('Platforms', results.otherData.platforms, true)
    .addField('Metacritic Score', results.otherData.metacriticScore, true)
    .addField('Tags', results.otherData.features, true)
    .addField('Developers', results.otherData.developer, true)
    .addField('Publisher', results.otherData.publisher)
    .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('ERROR has occurred or  `' + game + '`forensic game not found')
    })
})
})
}}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamprice',
  description: '',
  usage: ''
};