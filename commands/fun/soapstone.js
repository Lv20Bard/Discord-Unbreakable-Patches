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


const TEMPLATES = [
      '**** ahead',
      'No **** ahead',
      '**** required ahead',
      'be wary of ****',
      'try ****',
      'Could this be a ****?',
      'If only I had a ****...',
      'visions of ****...',
      'Time for ****',
      '****',
      '****!',
      '****?',
      '****...',
      'Huh. It\'s a ****...',
      'praise the ****!',
      'Let there be ****',
      'Ahh, ****...'
      ];

const CONJUNCTIONS = [
      ' ',
      ' and then ',
      ' therefore ',
      ' in short ',
      ' or ',
      ' only ',
      ' by the way ',
      ' so to speak ',
      ' all the more ',
      ' , '
];

const CATEGORIES = [
      // 'Creatures': [
            'enemy',
            'monster',
            'mob enemy',
            'tough enemy',
            'critical foe',
            'Hollow',
            'pilgrim',
            'prisoner',
            'monstrosity',
            'skeleton',
            'ghost',
            'beast',
            'lizard',
            'bug',
            'grub',
            'crab',
            'dwarf',
            'giant',
            'demon',
            'dragon',
            'knight',
            'sellword',
            'warrior',
            'herald',
            'bandit',
            'assassin',
            'sorcerer',
            'pyromancer',
            'cleric',
            'deprived',
            'sniper',
            'duo',
            'trio',
            'you',
            'you bastard',
            'good fellow',
            'saint',
            'wretch',
            'charmer',
            'poor soul',
            'oddball',
            'nimble one',
            'laggard',
            'moneybags',
            'beggar',
            'miscreant',
            'liar',
            'fatty',
            'beanpole',
            'youth',
            'elder',
            'old codger',
            'old dear',
            'merchant',
            'artisan',
            'master',
            'sage',
            'champion',
            'Lord of Cinder',
            'king',
            'queen',
            'prince',
            'princess',
            'angel',
            'god',
            'friend',
            'ally',
            'spouse',
            'covenantor',
            'Phantom',
            'Dark Spirit',
      // ],
      // 'Objects': [
            'bonfire',
            'ember',
            'fog wall',
            'lever',
            'contraption',
            'key',
            'trap',
            'torch',
            'door',
            'treasure',
            'chest',
            'something',
            'quite something',
            'rubbish',
            'filth',
            'weapon',
            'shield',
            'projectile',
            'armor',
            'item',
            'ring',
            'ore',
            'coal',
            'transposing kiln',
            'scroll',
            'umbral ash',
            'throne',
            'rite',
            'coffin',
            'cinder',
            'ash',
            'moon',
            'eye',
            'brew',
            'soup',
            'message',
            'bloodstain',
            'illusion',
      // ],
      // 'Techniques': [
            'close-ranged battle',
            'ranged battle',
            'eliminating one at a Time',
            'luring it out',
            'beating to a pulp',
            'ambush',
            'pincer attack',
            'hitting them in one swoop',
            'duel-wielding',
            'stealth',
            'mimicry',
            'fleeing',
            'charging',
            'jumping off',
            'dashing through',
            'circling around',
            'trapping inside',
            'rescue',
            'Skill',
            'sorcery',
            'pyromancy',
            'miracles',
            'pure luck',
            'prudence',
            'brief respite',
            'play dead',
      // ],
      // 'Actions': [
            'jog',
            'dash',
            'rolling',
            'backstepping',
            'jumping',
            'attacking',
            'jump attack',
            'dash attack',
            'counter attack',
            'stabbing in the back',
            'guard stun & stab',
            'plunging attack',
            'shield breaking',
            'blocking',
            'parrying',
            'locking-on',
            'no lock-on',
            'two-handing',
            'gesture',
            'control',
            'destroy',
      // ],
      // 'Geography': [
            'boulder',
            'lava',
            'poison gas',
            'enemy horde',
            'forest',
            'swamp',
            'cave',
            'shortcut',
            'detour',
            'hidden path',
            'secret passage',
            'dead end',
            'labyrinth',
            'hole',
            'bright spot',
            'dark spot',
            'open area',
            'tight spot',
            'safe zone',
            'danger zone',
            'sniper spot',
            'hiding place',
            'illusory wall',
            'ladder',
            'lift',
            'gorgeous view',
            'looking away',
            'overconfidence',
            'slip-up',
            'oversight',
            'fatigue',
            'bad luck',
            'inattention',
            'loss of stamina',
            'chance encounter',
            'planned encounter',
      // ],
      // 'Orientation': [
            'front',
            'back',
            'left',
            'right',
            'up',
            'down',
            'below',
            'above',
            'behind',
      // ],
      // 'Body parts': [
            'head',
            'neck',
            'stomach',
            'back',
            'armor',
            'finger',
            'leg',
            'rear',
            'tail',
            'wings',
            'anywhere',
            'tongue',
            'right arm',
            'left arm',
            'thumb',
            'index finger',
            'long finger',
            'ring finger',
            'small finger',
            'right leg',
            'left leg',
            'right side',
            'left side',
            'pincer',
            'wheel',
            'core',
            'mount',
      // ],
      // 'Attribute': [
            'regular',
            'strike',
            'thrust',
            'slash',
            'magic',
            'crystal',
            'fire',
            'chaos',
            'lightning',
            'blessing',
            'dark',
            'critical hits',
            'bleeding',
            'poison',
            'toxic',
            'frost',
            'curse',
            'equipment breakage',
      // ],
      // 'Concepts': [
            'chance',
            'quagmire',
            'hint',
            'secret',
            'sleeptalk',
            'happiness',
            'misfortune',
            'life',
            'death',
            'demise',
            'joy',
            'fury',
            'agony',
            'sadness',
            'tears',
            'loyalty',
            'betrayal',
            'hope',
            'despair',
            'fear',
            'losing sanity',
            'victory',
            'defeat',
            'sacrifice',
            'light',
            'dark',
            'bravery',
            'confidence',
            'vigor',
            'revenge',
            'resignation',
            'overwhelming',
            'regret',
            'pointless',
            'man',
            'woman',
            'friendship',
            'love',
            'recklessness',
            'composure',
            'guts',
            'comfort',
            'silence',
            'deep',
            'dregs',
      // ],
      // 'Musings': [
            'good luck',
            'fine work',
            'I did it!',
            'I\'ve failed...',
            'here!',
            'not here!',
            'I can\'t take this...',
            'lonely...',
            'don\'t you dare!',
            'do it!',
            'look carefully',
            'listen carefully',
            'think carefully',
            'this place again?',
            'now the real fight begins',
            'you don\'t deserve this',
            'keep moving',
            'pull back',
            'give it up',
            'don\'t give up',
            'help me...',
            'impossible...',
            'bloody expensive...',
            'let me out of here...',
            'stay calm',
            'like a dream...',
            'seems familiar...',
            'are you ready?',
            'it\'ll happen to you too',
            'praise the Sun!',
            'may the flames guide thee',
      ]


module.exports = class soapstone extends Commando.Command{
      constructor(client){
            super(client, {
                  name:"soapstone",
                  aliases:["orangesoapstone","ss","message"],
                  group:"fun",
                  memberName:"soapstone",
                  description:"Get a orange soapstone message",
                  examples: ['!soapstone'],
                  throttling: {
                        usages: 1,
                        duration: 2
                  }
            });
      }

      async run(msg){

            var TEMPLATES_CHOICE_1 = Math.floor(Math.random() * TEMPLATES.length);
            var TEMPLATES_CHOICE_2 = Math.floor(Math.random() * TEMPLATES.length);
            
            var CONJUNCTIONS_CHOICE = Math.floor(Math.random() * CONJUNCTIONS.length);

            var CONJUNCTION = CONJUNCTIONS[CONJUNCTIONS_CHOICE];

            var WORD_CHOICE_1 = Math.floor(Math.random() * CATEGORIES.length);
            var WORD_CHOICE_2 = Math.floor(Math.random() * CATEGORIES.length);

            var WORD_1 = CATEGORIES[WORD_CHOICE_1];
            var WORD_2 = CATEGORIES[WORD_CHOICE_2];

            var TEMPLATE_1 = TEMPLATES[TEMPLATES_CHOICE_1];
            var TEMPLATE_2 = TEMPLATES[TEMPLATES_CHOICE_2];
            
            TEMPLATE_1 = TEMPLATE_1.replace("****", WORD_1);
            TEMPLATE_2 = TEMPLATE_2.replace("****", WORD_2)
            
            var finalMessage;
            
            if(Math.random() > 0.5){
                  finalMessage = TEMPLATE_1 + CONJUNCTION + TEMPLATE_2;
            }
            else{
                  finalMessage = TEMPLATE_1
            }

           

            msg.channel.send(finalMessage)
                  .then( 
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

}

