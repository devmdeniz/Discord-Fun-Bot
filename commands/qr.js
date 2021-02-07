const qrcode = require("qrcode");
const tempy = require("tempy");
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.channel.send("Please wait a couple second")
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {

        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {

            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });

    } else {

        message.channel.stopTyping();
      
        let qrerror = new Discord.RichEmbed()
        .setDescription("Please write a url or text")
        
      
        message.channel.send(qrerror);
    }
  };

 



exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['qrcode'],
 permLevel: 0 ,
};

exports.help = {
 name: 'qr',
 description: '',
 usage: ``
};
