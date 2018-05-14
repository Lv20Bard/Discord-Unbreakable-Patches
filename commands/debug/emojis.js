const Commando = require('discord.js-commando');

module.exports = class emojiDebug extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"emojidebug",
                  aliases:["ed"],
                  group:"debug",
                  memberName:"emoji",
                  description:"list the servers custom emojis",
                  examples: ['!emojiDebug'],
                  throttling: {
                        usages: 1,
                        duration: 1
                  }
            });
      }

      // Poor 426515880822964234
      // Good 426515845876023308

      async run(msg){
           
            const emojiList = msg.guild.emojis.map(e=>e.toString()).join(" ");
            msg.channel.send(emojiList);
            msg.react("426515845876023308"); // Add Good
            msg.react("426515880822964234"); // Add Poor

      }

}