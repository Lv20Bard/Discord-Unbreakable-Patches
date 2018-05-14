const Commando = require('discord.js-commando');
// const {SQLiteProvider, CommandoClient} = require('discord.js-commando');
const path = require('path');
// const PersistentCollection = require("enmap");
const client = new Commando.Client({
    commandPrefix: '!',
    owner:'99271561151803392',
    disableEveryone: true
});
const token = 'NDQzMTI5MjEyMjcxMDY3MTQ2.DdI32g.rDpnnOpheFL-2r80zzl5HFOlHRM';
const {oneLine} = require('common-tags');

// Emojis for Voting - Change these to your servers equivilant emojis
const upvoteID = "426515845876023308"; 
const downvoteID = "426515880822964234";
const tier0ID = "426517739734040587";
const tier1TD = "426516878857469952";
const tier2TD = "426517748676296715";
const tier3TD = "426517739813732354";
const tier4TD = "426517756222111758";
const tier5TD = "426517764161929217";


client
    .on('error', console.error)
    .on('warn', console.warn)
    .on('debug',console.debug)
    .on('ready', () => {
        console.log('Oh, Yes, Yes, What can I do?');
        client.user.setActivity("Knocking Clerics off Bridges");
    })
    .on('disconnect', () => {
        console.warn('Disconnected!');
    })
    .on('reconnecting', () => {
        console.warn('Reconnecting ...');
    })
    .on('commandError', (cmd, err) => {
        if(err instanceof Commando.FriendlyError) return;
        console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
    })
    .on('commandBlocked', (msg, reason) => {
        console.log(oneLine`
            Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
            blocked; ${reason}
        `);
    })
    .on('commandPrefixChange', (guild, prefix) => {
        console.log(oneLine`
            Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
            ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
        `);
    })
    .on('commandStatusChange', (guild, command, enabled) => {
        console.log(oneLine`
            Command ${command.groupID}:${command.memberName}
            ${enabled ? 'enabled' : 'disabled'}
            ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
        `);
    })
    .on('groupStatusChange', (guild, group, enabled) => {
        console.log(oneLine`
            Group ${group.id}
            ${enabled ? 'enabled' : 'disabled'}
            ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
        `);
    })



    // Commands that react without !
    .on('message', msg => {

        // Dad Reply
        var re = (/\bi\'?m\s+(.*)/gi);
        if( (msg.content.search(re) >= 0) && !(msg.author.bot)){
            console.log(Math.floor(Math.random() * 16));
            if(Math.floor(Math.random() * 16 ) == 15 ){
                var word = re.exec(msg.content);
                msg.channel.send("Hi "+word[1]+", I'm Dad!");
            }
        }

        // Add Good and Poor Reactions to embeded images that are posted
        if (msg.embeds.length > 0){
            console.log("Adding Reactions");
            AddDSReactions(msg);
        } 
        
          
    })

    // Upgrade the Icons with more Reactions
    .on('messageReactionAdd', (reaction, user) => {
        
        // Logic for Reacting to things with the GOOD emoji
        if(reaction.emoji.id == upvoteID){
            if(reaction.count == 1){
                if(reaction.message.reactions.get('poor:426515880822964234')){
                    reaction.message.react(tier0ID)
                    .then()
                    .catch(console.error);
                }
            }
            else if(reaction.count == 2){
                reaction.message.react(tier1TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('start:426517739734040587')){
                    reaction.message.reactions.get('start:426517739734040587').remove();
                }
            }
            else if(reaction.count == 3){
                reaction.message.react(tier2TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('stone:426516878857469952')){
                    reaction.message.reactions.get('stone:426516878857469952').remove();
                }
                if(reaction.message.reactions.get('start:426517739734040587')){
                    reaction.message.reactions.get('start:426517739734040587').remove();
                }
            }
            else if(reaction.count == 4){
                reaction.message.react(tier3TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('bronze:426517748676296715')){
                    reaction.message.reactions.get('bronze:426517748676296715').remove();
                }
                if(reaction.message.reactions.get('stone:426516878857469952')){
                    reaction.message.reactions.get('stone:426516878857469952').remove();
                }
                if(reaction.message.reactions.get('start:426517739734040587')){
                    reaction.message.reactions.get('start:426517739734040587').remove();
                }
            }
            else if(reaction.count == 5){
                reaction.message.react(tier4TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('silver:426517739813732354')){
                    reaction.message.reactions.get('silver:426517739813732354').remove();
                }
                if(reaction.message.reactions.get('bronze:426517748676296715')){
                    reaction.message.reactions.get('bronze:426517748676296715').remove();
                }
                if(reaction.message.reactions.get('stone:426516878857469952')){
                    reaction.message.reactions.get('stone:426516878857469952').remove();
                }
                if(reaction.message.reactions.get('start:426517739734040587')){
                    reaction.message.reactions.get('start:426517739734040587').remove();
                }
            }
            else if(reaction.count == 6){
                reaction.message.react(tier5TD)
                .then(reaction.message.channel.send("Thanks, good compeer!"))
                .catch(console.error);
                if(reaction.message.reactions.get('gold:426517756222111758')){
                    reaction.message.reactions.get('gold:426517756222111758').remove();
                }
                if(reaction.message.reactions.get('silver:426517739813732354')){
                    reaction.message.reactions.get('silver:426517739813732354').remove();
                }
                if(reaction.message.reactions.get('bronze:426517748676296715')){
                    reaction.message.reactions.get('bronze:426517748676296715').remove();
                }
                if(reaction.message.reactions.get('stone:426516878857469952')){
                    reaction.message.reactions.get('stone:426516878857469952').remove();
                }
                if(reaction.message.reactions.get('start:426517739734040587')){
                    reaction.message.reactions.get('start:426517739734040587').remove();
                }
            }

            else{

            }

        }


    
    })


    .on('messageReactionRemove',(reaction,user) =>{
        
        // Logic for when people remove the GOOD emoji
        if(reaction.emoji.id == upvoteID){
            // If the Good emoji goes down to one remove stone and add start
            if(reaction.count == 1){
                reaction.message.react(tier0ID)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('stone:426516878857469952')){
                    reaction.message.reactions.get('stone:426516878857469952').remove();
                }
                if(reaction.message.reactions.get('bronze:426517748676296715')){
                    reaction.message.reactions.get('bronze:426517748676296715').remove();
                }
                if(reaction.message.reactions.get('silver:426517739813732354')){
                    reaction.message.reactions.get('silver:426517739813732354').remove();
                }
                if(reaction.message.reactions.get('gold:426517756222111758')){
                    reaction.message.reactions.get('gold:426517756222111758').remove();
                }
                if(reaction.message.reactions.get('moonstone:426517764161929217')){
                    reaction.message.reactions.get('moonstone:426517764161929217').remove();
                }
            }
            // If the good emoji goes down to two remove bronze and add stone
            else if(reaction.count == 2){
                reaction.message.react(tier1TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('bronze:426517748676296715')){
                    reaction.message.reactions.get('bronze:426517748676296715').remove();
                }
                if(reaction.message.reactions.get('silver:426517739813732354')){
                    reaction.message.reactions.get('silver:426517739813732354').remove();
                }
                if(reaction.message.reactions.get('gold:426517756222111758')){
                    reaction.message.reactions.get('gold:426517756222111758').remove();
                }
                if(reaction.message.reactions.get('moonstone:426517764161929217')){
                    reaction.message.reactions.get('moonstone:426517764161929217').remove();
                }
            }
            // If the emoji count drops to 3 remove silver and add bronze
            else if(reaction.count == 3){
                reaction.message.react(tier2TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('silver:426517739813732354')){
                    reaction.message.reactions.get('silver:426517739813732354').remove();
                }
                if(reaction.message.reactions.get('gold:426517756222111758')){
                    reaction.message.reactions.get('gold:426517756222111758').remove();
                }
                if(reaction.message.reactions.get('moonstone:426517764161929217')){
                    reaction.message.reactions.get('moonstone:426517764161929217').remove();
                }
            }
            // If the emoji count drops to 4 remove silver and add bronze
            else if(reaction.count == 4){
                reaction.message.react(tier3TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('gold:426517756222111758')){
                    reaction.message.reactions.get('gold:426517756222111758').remove();
                }
                if(reaction.message.reactions.get('moonstone:426517764161929217')){
                    reaction.message.reactions.get('moonstone:426517764161929217').remove();
                }
            }
            else if(reaction.count == 5){
                reaction.message.react(tier4TD)
                .then()
                .catch(console.error);
                if(reaction.message.reactions.get('moonstone:426517764161929217')){
                    reaction.message.reactions.get('moonstone:426517764161929217').remove();
                }   
            }
        }
    })

    // Updates on a user joining or leaving a channel or muting/unmuting themselves
    .on('voiceStateUpdate',(oldMember,newMember) => {
        // console.log(oldMember.voiceChannel);
        // console.log(newMember.voiceChannel);
        // console.log('Voice Status Update');

    });
    



client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['fun','Fun Commands'],
        ['utility','Useful Commands'],
        ['voice','For making sound'],
        ['debug','For Working on the Bot']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));



client.login(token);


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