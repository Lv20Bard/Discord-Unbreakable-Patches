const Commando = require('discord.js-commando');

module.exports = class tidy extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"tidy",
                  aliases:["cleanup"],
                  group:"debug",
                  memberName:"tidy",
                  description:"Tidy All the Bots Messages",
                  examples: ['!tidy'],
                  throttling: {
                        usages: 1,
                        duration: 1
                  }
            });
      }

      async run(msg){
            msg.delete()
            .then()
            .catch(console.error());
           
            if (!msg.member.roles.find("name", "Lord Souls")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                  msg.channel.send('You need the \`Lord Souls\` role to use this command.'); // This tells the user in chat that they need the role.
                  return; // this returns the code, so the rest doesn't run.
            }
            else{
                  msg.channel.fetchMessages({})
                  .then(messages => {
                        var messagesArr = messages.array();
                        var messageCount = messagesArr.length;

                        for(var i = 0; i<messageCount;i++){
                              if(messagesArr[i].author.bot || (messagesArr[i].content.charAt(0) === '!' ) ){
                                    messagesArr[i].delete()
                                    .then()
                                    .catch(console.error());
                              }
                        }

                  })
                  .catch(console.error());
            }

      }

}