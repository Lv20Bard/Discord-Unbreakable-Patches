const Commando = require('discord.js-commando');


module.exports = class RollDice extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"roll",
                  aliases:["dice"],
                  group:"fun",
                  memberName:"roll",
                  description:"Roll some dice",
                  examples: ['!roll 1d6'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  },
                  args:
                  [
                        {
                              key:'dice',
                              prompt: 'how many of what type of dice? (i.e \"1d6\")',
                              type:'string'
                        }
                  ]
            });
      }

      async run(msg, args){
            var diceString = args.dice;
            diceString = diceString.toLowerCase();

            // Break the 1d6 into 1 and 6
            var argArray = diceString.split("d");
            
            var diceSize = argArray[1];
            var numOfRolls = argArray[0];

            var total = 0;
            var finalMessage = "Your Rolls for "+diceString+"\n";
            var currentRoll;

            for(var i = 0; i < numOfRolls; i++){
                  currentRoll = Math.floor(Math.random() * diceSize)+1;

                  if(i == 0){
                        finalMessage += ""+currentRoll+" ";
                        total += currentRoll;
                  }
                  else{
                        finalMessage += " + "+currentRoll+" ";
                        total += currentRoll;
                  }
            }

            finalMessage += "\n**Total:** "+total;

            msg.channel.send(finalMessage);

      }

}