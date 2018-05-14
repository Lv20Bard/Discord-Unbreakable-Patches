const Commando = require('discord.js-commando');


module.exports = class Temperature extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"temperature",
                  aliases:["temp"],
                  group:"utility",
                  memberName:"temp",
                  description:"Get the bot to convert a temperature for you.",
                  examples: ['!temp C F 28'],
                  throttling: {
                        usages: 1,
                        duration: 2
                  },
                  args:[
                        {
                             key: 'firstType',
                             prompt: 'What Temperature to you want to convert from (C, F, or K)',
                             type:'string' 
                        },              
                        {
                              key: 'secondType',
                              prompt: 'What Temperature to you want to convert to (C, F, or K)',
                              type:'string' 
                        },
                        {
                              key: 'temp',
                              prompt: 'Whats the origional temperature',
                              type:'integer' 
                        }
                  ]
            });
      }

      async run(msg, {firstType, secondType, temp}){
            // Get our variables
            var finalTemperature;
            var finalMessage;
            firstType = firstType.toUpperCase();
            secondType = secondType.toUpperCase();
      
            // Quickly figure out what math we need
            switch (firstType){
                  case "C":
                        switch (secondType){
                              case "C":
                                    finalTemperature = temp;
                                    finalMessage = temp+" Degrees Celsius is "+finalTemperature+" Degrees Celsius, You Moron";
                              break;
                              case "F":
                                    finalTemperature = (temp * 1.8) + 32;
                                    finalMessage = temp+" Degrees Celsius is "+finalTemperature+" Degrees Fahrenheit";
                              break;
                              case "K":
                                    finalTemperature = temp + 273.15;
                                    finalMessage = temp+" Degrees Celsius is "+finalTemperature+" Degrees Kelvin";
                              break;
                              default:
                                    finalMessage = "The second temperature character was invalid.";
                              break;
                        }
                  break;
                  case "F":
                        switch (secondType){
                              case "C":
                                    finalTemperature = (temp - 32) / 1.8;
                                    finalMessage = temp+" Degrees Fahrenheit is "+finalTemperature+" Degrees Celsius";
                              break;
                              case "F":
                                    finalTemperature = temp;
                                    finalMessage = temp+" Degrees Fahrenheit is "+finalTemperature+" Degrees Fahrenheit, You Moron";
                              break;
                              case "K":
                                    finalTemperature = ((temp - 32) / 1.8) + 273.15;
                                    finalMessage = temp+" Degrees Fahrenheit is "+finalTemperature+" Degrees Kelvin";
                              break;
                              default:
                                    finalMessage = "The second temperature character was invalid.";
                              break;
                        }
                  break;
                  case "K":
                        switch (secondType){
                              case "C":
                                    finalTemperature = temp - 273.15;
                                    finalMessage = temp+" Degrees Kelvin is "+finalTemperature+" Degrees Celsius";
                              break;
                              case "F":
                                    finalTemperature = ((temp - 273.15)*1.8) + 32;
                                    finalMessage = temp+" Degrees Kelvin is "+finalTemperature+" Degrees Fahrenheit";
                              break;
                              case "K":
                                    finalTemperature = temp;
                                    finalMessage = temp+" Degrees Kelvin is "+finalTemperature+" Degrees Kelvin, You Moron";
                              break;
                              default:
                                    finalMessage = "The second temperature character was invalid.";
                              break;
                        }
                  break;
                  default:
                        finalMessage = "The first temperature character was invalid.";
                  break;
            }

            //send message
            msg.channel.send(finalMessage);


      }

}