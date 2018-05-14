const Commando = require('discord.js-commando');

const fs = require('fs');

var levenshtein = require('fast-levenshtein');
var jwdistance = require('jaro-winkler');

const wordListPath = require('word-list'); 
const words = fs.readFileSync(wordListPath, 'utf8').split('\n');


module.exports = class Words extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"levenshtein",
                  aliases:["leven","fixword"],
                  group:"utility",
                  memberName:"fixwords",
                  description:"Figures out the closest word to another sentence",
                  examples: ['!levenshtein'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  },
                  args:[{
                        key:'word',
                        prompt:'Enter the combination of letters you want to Levenshtein',
                        type:'string'
                  }]

            });
      }

      async run(msg,args){
            // our words
            var sentence = args.word.toLowerCase().split(" ");
            var finishedSentence;
            var finalmessage = "";

            console.log(sentence);

            var letters;
            var isSentence;
            var finalSentence = []
            var bestWords = []
            var currentWord;
            var currentDictonaryWord;
            var currentBestWord;
            var closestWord;

            // LD and JW definitions;
            // This will be the variable we use for our LD
            var lowestLD;
            var LD;
            // this will be our JWD
            var highestJW;
            var JW;
           
            

            // If the sentence has a length greater then 1, its a sentence
            if(sentence.length > 1){
                  isSentence = true;
            }
            // otherwise it must be a single word
            else{ 
                  isSentence = false;
            }
            
            // For each word in the sentence iterate over it
            for(var i = 0; i < sentence.length; i++){
                  console.log(sentence[i]);

                  lowestLD = levenshtein.get(sentence[i],words[0]);
                  highestJW = 0;
                  console.log(lowestLD);

                  for(var j = 0; j < words.length; j++){
                        LD = levenshtein.get(sentence[i],words[j]);
                        if(LD < lowestLD){
                              lowestLD = LD;
                              bestWords = [];
                              bestWords.push(words[j]);
                        }
                        else if(LD === lowestLD){
                              bestWords.push(words[j]);
                        }
                  }

                  for(var k = 0; k<bestWords.length; k++){
                        JW = jwdistance(sentence[i], bestWords[k]);
                        if(JW > highestJW){
                              closestWord = bestWords[k];
                        }
                  }

                  finalSentence.push(closestWord);
            }

            for(var i = 0; i<finalSentence.length; i++){
                  finalmessage += finalSentence[i]+" ";
            }

            msg.channel.send(finalmessage);
            

      }

}