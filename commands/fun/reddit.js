// 

const Commando = require('discord.js-commando');
var request = require('request');

module.exports = class Reddit extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"reddit",
                  aliases:[],
                  group:"fun",
                  memberName:"reddit",
                  description:"check the top post of reddit",
                  examples: ['!reddit'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  }
            });
      }

      async run(msg){
            var options = {
                  url: 'https://www.reddit.com/r/all/top/.json?count=1',
                  headers: {}
            };
            request.get(options, function (err, res, body) {
                  try{
                       console.log(body);

                  }
                  catch(e){
                        console.log("Error:\n"+e);
                  }
            });

            msg.channel.send("This is doing a thing, but you can't see it yet.");
            
      }

}