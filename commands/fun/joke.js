const Commando = require('discord.js-commando');
var request = require('request');
const upvoteID = "426515845876023308"; 
const downvoteID = "426515880822964234";
const tier0ID = "426517739734040587";
const tier1TD = "426516878857469952";
const tier2TD = "426517748676296715";
const tier3TD = "426517739813732354";
const tier4TD = "426517756222111758";
const tier5TD = "426517764161929217";

module.exports = class Joke extends Commando.Command {
      constructor(client){
            super(client, {
                  name:"joke",
                  aliases:["funny","dadjoke"],
                  group:"fun",
                  memberName:"joke",
                  description:"Get the bot to tell you a funny joke.",
                  examples: ['!joke'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  }
            });
      }

      async run(msg){
            var options = {
                  url: 'https://icanhazdadjoke.com/',
                  headers: {
                    'Accept': 'text/plain'
                  }
            };
            request.get(options, function (err, res, body) {
                  try{
                        msg.channel.send(body).then(
                              async (message) => {
                                    await message.react(upvoteID)
                                    .then()
                                    .catch(console.error);
                                    await message.react(downvoteID)
                                    .then()
                                    .catch(console.error);
                                    await message.react(tier0ID)
                                    .then()
                                    .catch(console.error);
                              }
                        )
                       .catch(console.error);
                  }
                  catch(e){
                        console.log("Error:\n"+e);
                  }
            });
            
      }
}


async function AddDSReactions(message){
      await message.react(upvoteID)
      .then()
      .catch(console.error);
      await message.react(downvoteID)
      .then()
      .catch(console.error);
      await message.react(tier0ID)
      .then()
      .catch(console.error);
}


