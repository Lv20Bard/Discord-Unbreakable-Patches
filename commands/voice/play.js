const Commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class Play extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"play",
                  aliases:["sound"],
                  group:"voice",
                  memberName:"play",
                  description:"play some sounds",
                  examples: ['!play curb'],
                  throttling: {
                        usages: 1,
                        duration: 5
                  },
                  args: [
                        {
                              key: 'request',
                              prompt: 'Type the name of the sound you want to play, or \`list\` for a list of sounds',
                              type:'string' 
                        }
                  ]
            });

            this.state = {
                  isReady: true,
                  songs:[
                        {
                              name: "curb",
                              description:"The theme from Curb your Enthusiasm",
                              length: 60000,
                              path:'/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/curb.mp3'
                              
                        },
                        {
                              name:"bandit radio",
                              description:"A nu chiki-briki i v damki!",
                              length: 120000,
                              path:'/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/banditradio.mp3'
                        },
                        {
                              name:"big enough",
                              length: 30000,
                              description:"Jimmy Barnes Screaming",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/bigenough.mp3"
                        },
                        {
                              name:"running",
                              length: 80000,
                              description:"inital d - running in the 90s",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/InitalD.mp3"
                        },
                        {
                              name:"normies",
                              length: 30000,
                              description:"reeeeeeeeeee",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/normies.mp3"
                        },
                        {
                              name:"dr google",
                              length: 10000,
                              description:"by proZD",
                              volume:1,
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/googling your symptoms.mp3"
                        },
                        {
                              name:"time to stop",
                              length: 10000,
                              description:"its time, to stop",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/its time to stop.mp3"
                        },
                        {
                              name:"sea shanty 2",
                              length: 60000,
                              description:"nice.",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/Runescape OST Sea Shanty 2.mp3"
                        },
                        {
                              name:"sea shanty 2 remix",
                              length: 60000,
                              description:"nice.",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/Runescape 07 - Sea Shanty 2 (Trap Remix).mp3"
                        },
                        {
                              name:"aurora borealis",
                              volume:1,
                              length: 30000,
                              description:"AT THIS TIME OF YEAR, AT THIS TIME OF DAY",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/aurora borealis.mp3"
                        },
                        {
                              name:"spekkio",
                              length: 60000,
                              description:"Delightful Spekkio",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/delightful spekkio.mp3"
                        },
                        {
                              name:"bitconnect",
                              length: 30000,
                              description:"I love bitconnect",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/bitconnect.mp3"
                        },
                        {
                              name:"how about",
                              length: 10000,
                              volume:0.5,
                              description:"wait, no, stop. If you're in the league of nations you're not supposed to try and take over the world",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/howboutido.mp3"
                        },
                        {
                              name:"knock knock",
                              length: 10000,
                              volume:0.5,
                              description:"its america",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/knockknock.mp3"
                        },
                        {
                              name:"oof",
                              length: 5000,
                              volume:1,
                              description:"roblox death sound",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/roblox death sound.mp3"
                        },
                        {
                              name:"war room",
                              length: 10000,
                              volume:1,
                              description:"gentalmen!",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/warroom.mp3"
                        },
                        {
                              name:"not funny",
                              length: 10000,
                              volume:1,
                              description:"Yes man!",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/Not Funny.mp3"
                        },
                        {
                              name:"gay frogs",
                              length: 10000,
                              volume:1,
                              description:"Chemicals in the water",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/frogsgay.mp3"
                        },
                        {
                              name:"ora",
                              length: 30000,
                              volume:1,
                              description:"ORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORAORA",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/ora.mp3"
                        },
                        {
                              name:"fnds",
                              length: 5000,
                              volume:1,
                              description:"Get reckt rust lord",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/Fortnite - death.mp3"
                        },
                        {
                              name:"only game",
                              length: 5000,
                              volume:1,
                              description:"why you heff to be mad?",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/heff to be mad.mp3"
                        },
                        {
                              name:"kaz",
                              length: 40000,
                              volume:1,
                              description:"Why are we still here?",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/Kaz short speech.mp3"
                        },
                        {
                              name:"thesis",
                              length: 120000,
                              volume:0.5,
                              description:"An Crule Angles This is",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/Cruel Doggos Thesis.mp3"
                        },
                        {
                              name:"profanity",
                              length: 1000,
                              volume:0.5,
                              description:"Watch your profanity",
                              path:"/Users/BenMacneil/Desktop/Helpful Discord Bot/resources/audio/watch your profanity.mp3"
                        },
                        {
                              name:"stop",
                              description:"Stops playback",
                              path:""
                        }
                  ]
            }
      }


      // Main code
      async run(msg, args){

            // Voice Only works in a guild
            if(!msg.guild) return;

            // Define some Junk
            let request = args.request;
            let lowerCaseRequest = request.toLowerCase();
            let songNumber;
            let re = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/ ;
            let voiceChannel = msg.member.voiceChannel;

            // check the list to see if its a pre-programed song
            var song = -1;
            for(var x=0; x<this.state.songs.length; x++){
                  if( this.state.songs[x].name == request){
                        song = x;
                  }
            }


            // Check if the user is in a voice channel
            if(voiceChannel){
                  // Ready our connection
                  const connection = await msg.member.voiceChannel.join();

                  // Check if the request is one of the special requests
                  // List all Requests
                  

                  if(lowerCaseRequest === "list"){
                        msg.author.send("# - Name - Description");
                        for(var i = 0; i<this.state.songs.length; i++){  
                              msg.author.send((i+1)+": \'"+this.state.songs[i].name+"\' - "+this.state.songs[i].description);
                        }     
                        return;
                  }
                  // // Stop the currently playing thing
                  // else if(lowerCaseRequest === "stop"){
                  //       console.log(this.client.voiceConnections)
                  //       // this.client.getAudioContext(voiceChannel, function (err, stream) {
                  //       //       steam.stop();
                  //       // });
                  // }
                  // Youtube Link
                  else if(re.test(request)){
                        msg.channel.send("Type: \`!play stop\` to stop playback")
                        .then( message => {
                              message.delete(60000);
                        })
                        .catch(console.error);
                        
                        const dispatcher = connection.playStream(ytdl(
                              request,                              
                              { 
                                    filter: 'audioonly',
                                    passes: 3,
                                    volume: 0.25
                              })
                        );
                  }

                  // Pre-Progammed Song
                  else if(song >= 0){

                        // Check if the pre-programmed song has a time
                        let time = 30000;
                        if(this.state.songs[song].length){
                              time = this.state.songs[song].length;
                        }
                        // check if the pre-programmed song has a volume
                        let volume = 0.25
                        if(this.state.songs[song].volume){
                              volume = this.state.songs[song].volume;
                        };
                        
                        const dispatcher = connection.playFile(
                              this.state.songs[song].path, 
                              {
                                    volume : volume,
                                    passes : 3
                              }
                        ); 

                  }
                  // This means the request was un playable
                  else{
                        msg.channel.send("That's Not a Request I can Play. \`!play list\` Lists all the preprogramed songs!");
                  }

                  return;
            }
            else{
                  msg.channel.send("You must be in a channel to play sounds.");
                  return;
            }

            return;
      }
}


// console.log();

