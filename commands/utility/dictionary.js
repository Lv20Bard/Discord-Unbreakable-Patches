const Commando = require('discord.js-commando');
var request = require('request');


module.exports = class Dictionary extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"define",
                  aliases:["dictionary"],
                  group:"utility",
                  memberName:"define",
                  description:"Get the definition of a word",
                  examples: ['!define cat'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  },
                  args: [
                        {
                              key: 'word',
                              prompt: 'What word would you like defined?',
                              type:'string' 
                        }
                  ]
            });
      }


      async run(msg,{word}){
            var path = "https://od-api.oxforddictionaries.com/api/v1/entries/en/"+word;
            
            var options = {
                  url: path,
                  headers: {
                    'app_id': '5c49750f',
                    'app_key': '729f85cc289ae835fafba2826e7dc458'
                  }
            };
            request.get(options, function (err, res, body) {
                  try{
                       msg.channel.send((JSON.parse(body).results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]));
                  }
                  catch(e){
                        msg.channel.send("No such word");
                  }
            });
      }
}

