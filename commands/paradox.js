const Discord = require('discord.js');
const settings = require('../settings.json');


 exports.run = (client, message, args) => {



var responses = [
  'https://media.giphy.com/media/weNyGjdcQ3d9S/giphy.gif',
  'https://media.giphy.com/media/mRRIb7j4ZCuSk/giphy.gif',
  'http://38.media.tumblr.com/fcc88ebdfbf4e45a48d09856a10aead1/tumblr_nj07maPH301sjwwzso1_500.gif',
  'http://bestanimations.com/Science/Math/geometry/aristotle-wheel-paradox.gif',
  'https://66.media.tumblr.com/d18bece23c97943cdbac92736ad2b4f1/tumblr_niw8jaYtX41rpco88o1_500.gif',
  'http://25.media.tumblr.com/tumblr_m6usbsENB61rzlf5vo1_500.gif',
  'http://www.relativelyinteresting.com/wp-content/uploads/2014/12/penrose-triangle-illusion-gif.gif',
  'https://i.gifer.com/ENqD.gif',
  'https://media.giphy.com/media/T7zGHBOq7R4yI/giphy.gif',
  'https://i.chzbgr.com/full/5025313536/h260B0F6F/',
  'https://lh6.googleusercontent.com/-iorNywb1cEI/TpHAORWve_I/AAAAAAAAZX0/JWzx8ON08a0/w506-h750/Best%2BIllusion-402-frank_hgs-e.gif',
  'https://i.pinimg.com/originals/78/81/cb/7881cb83501e5c114c7de094dc84e1ea.gif',
  'http://25.media.tumblr.com/ef1092d7b8ec17e547d731178adb0f5c/tumblr_moeq4sidM41rpj04no1_500.gif',
  'https://i.pinimg.com/originals/a6/3c/ac/a63cac4bc10c109e47d535c7210d588e.gif',
  'http://cdn.playbuzz.com/cdn/e708af99-f9ec-4590-8ccb-db88a7c24978/e6b535f5-3860-47fc-82ff-879915b7cb89.gif',
  'https://i.gifer.com/Z1fB.gif',
  ];
         var response = responses[Math.floor(Math.random() * responses.length)];

  if (!message.guild) {
    const dmalert = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('*You Can not Use It Here!*')
    return message.author.sendEmbed(dmalert); }
    if (message.channel.type !== 'dm') {

      const serverinfo = new Discord.RichEmbed()
    .setAuthor('Paradox Videos <3')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
	.setImage(response)
    return message.channel.sendEmbed(serverinfo);
    }

};

 exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: [],
 permLevel: 0 ,
};

exports.help = {
 name: 'paradox',
 description: '',
 usage: ''
};
