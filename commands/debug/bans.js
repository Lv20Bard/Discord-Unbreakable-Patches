


const Commando = require('discord.js-commando');

module.exports = class ChangeLog extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"bans",
                  aliases:["bannedusers"],
                  group:"debug",
                  memberName:"band",
                  description:"Lists the Users Banned on this Server",
                  examples: ['!bans'],
                  throttling: {
                        usages: 1,
                        duration: 60
                  }
            });
      }


      async run(msg){
            msg.channel.send("\*\*Users Banned On This Server\*\*");
            msg.guild.fetchBans()
                  .then(bans => msg.channel.send((bans.map(u => u.username))))
                  .catch(console.error);
      }

}