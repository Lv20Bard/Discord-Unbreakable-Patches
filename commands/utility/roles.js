const Commando = require('discord.js-commando');
const levenshtein = require('fast-levenshtein');

let WoW_ID = "309699905411088385";
let WoS_ID = "309330111843532811";
let AF_ID = "309332380190244875";
let RF_ID = "309330557035216896";
let WoF_ID = "309348811791269889";
let MM_ID = "309330645811724288";
let DB_ID = "309330506602905601";
let BS_ID = "309330394661126144";

let role_options = [
      "Warrior of Sunlight",
      "Way of White",
      "Aldrich Faithful",
      "Rosaria's Fingers",
      "Watchdog of Farron",
      "Mound Makers",
      "Darkmoon Blade",
      "Blue Sentinel"
];

module.exports = class roles extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"roles",
                  aliases:["role"],
                  group:"utility",
                  memberName:"roles",
                  description:"Lets you change your role",
                  examples: ['!roles Warrior of Sunlight'],
                  throttling: {
                        usages: 1,
                        duration: 60
                  },
                  args:[{
                        key: 'role',
                        prompt:'What Role Would You Like? (This only works for colour roles)',
                        type: 'string'
                  }]
            });
      }

      async run(msg, args){
            msg.delete().catch(console.error);

            let member = msg.member;
            let requested_role = args.role;

            requested_role = await check_roll(requested_role);
            
            msg.channel.send("Setting Colour Role to: "+requested_role).then(
                  message =>{
                        message.delete(10000);
                  }
            ).catch(console.error);
            
            if(member.roles.some(r=>role_options.includes(r.name))){
                  let members_roles = await users_roles(msg, member);
                  members_roles.push(msg.guild.roles.find("name",requested_role));
                  member.setRoles(members_roles).catch(console.error);
            }    
            else{
                  member.addRole(msg.guild.roles.find("name",requested_role)).catch(console.error);
            }

      }

}

function check_roll(requested_role){

      let lowest_LD = levenshtein.get(requested_role, role_options[0]);
      let closestWord = role_options[0];
      let current_LD;

      if( role_options.includes(requested_role) ){
            return closestWord;
      }
      else{
            
            for(let i = 0; i < role_options.length; i++){
                  current_LD = levenshtein.get(requested_role, role_options[i]);
                  if(current_LD < lowest_LD){
                        lowest_LD = current_LD;
                        closestWord = role_options[i]
                  }
            }

            return closestWord;
      }
}

function users_roles(msg, member){
      let users_roles = [];


      if(member.roles.has("268850074799308816")){
            users_roles.push("268850074799308816")
      }
      if(member.roles.has("382711771296825345")){
            users_roles.push("382711771296825345")
      }
      if(member.roles.has("277427694692466689")){
            users_roles.push("277427694692466689")
      }
      if(member.roles.has("279637541681102848")){
            users_roles.push("279637541681102848")
      }

      return users_roles;
}