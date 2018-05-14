const Commando = require('discord.js-commando');

module.exports = class ChangeLog extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"changelog",
                  aliases:["cl"],
                  group:"debug",
                  memberName:"changelog",
                  description:"Lists the most recent changes in the bot",
                  examples: ['!changelog'],
                  throttling: {
                        usages: 1,
                        duration: 60
                  }
            });
      }


      async run(msg){
            msg.author.send(`
            *Helpful Discord Bot 0.0.4*\n
            *Bug Fixes*
            -Reactions now react properly

            *Fun Stuff*
            -added \`!play only game\`
            -When you increase the amount of good reacts the rating on the message will improve

            *Commands*
            -Added the Changelog command
            -Added \`!Tidy\`, this is an admin command that deletes bot messages

            *Known Issues*
            -Adding Goods on anything Doesn't work perfectly. You need to add Poor First or it wont get a metal until it has 2 Goods
            -The bot can only react to message that have been sent since its last reset, no way around this
            `);

      }

}