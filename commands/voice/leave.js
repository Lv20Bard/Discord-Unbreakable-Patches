const Commando = require('discord.js-commando');


// This command makes the bot join the voice channel of the user who uses it

module.exports = class Join extends Commando.Command{
      constructor(client){
            super(client,{
                  name:"leave",
                  aliases:["vcl"],
                  group:"voice",
                  memberName:"leave",
                  description:"Makes the Bot Join your Leave your Voice Channel",
                  examples: ['!leave'],
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
                  voiceChannel.leave();
            }
            else{
                  msg.channel.send("I can only leave a place where you are!");
            }
      }
}