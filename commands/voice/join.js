const Commando = require('discord.js-commando');


// This command makes the bot join the voice channel of the user who uses it

module.exports = class Join extends Commando.Command{
      constructor(client){
            super(client,{
                  name:"join",
                  aliases:["vcj"],
                  group:"voice",
                  memberName:"join",
                  description:"Makes the Bot Join your Voice Channel",
                  examples: ['!join'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  },
            });

      }

      async run (msg){
            if (!msg.guild) return;
            var voiceChannel = msg.member.voiceChannel;
            if(voiceChannel){
                  voiceChannel.join();
            }
            else{
                  msg.channel.send("You must be in a voice channel to get me to join a voice channel");
            }
      }
}