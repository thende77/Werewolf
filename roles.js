
var ROLE_DATA = {
    title: "Werewolf Roles",
    subtitle: "Tap a role to view abilities",
    groups: [
        {
            id: "base",
            title: "Base Game",
            roles: [
                {id:"werewolf",name:"Werewolf",team:"wolf",description:"The Werewolves wake up and identify each other. They win if at least one Werewolf survives the vote."},
                {id:"villager",name:"Villager",team:"village",description:"The Villager has no special ability. Find and vote out the Werewolves to win."},
                {id:"doppelganger",name:"Doppelganger",team:"variable",description:"Look at another player's card. You become a copy of that role and join its team. You perform its action when appropriate."},
                {id:"minion",name:"Minion",team:"wolf",description:"Learn who the Werewolves are. Protect them from being voted out. You win if at least one Werewolf survives."},
                {id:"mason",name:"Mason",team:"village",description:"Wake up and identify the other Mason, if one is in play."},
                {id:"seer",name:"Seer",team:"village",description:"Look at another player's card or two cards from the center."},
                {id:"robber",name:"Robber",team:"variable",description:"Exchange your card with another player's card, then look at your new card. You join your new team's side."},
                {id:"troublemaker",name:"Troublemaker",team:"village",description:"Exchange the cards of two other players without looking at them."},
                {id:"drunk",name:"Drunk",team:"variable",description:"Exchange your card with one of the center cards without looking at your new role."},
                {id:"insomniac",name:"Insomniac",team:"village",description:"Look at your own card at the end of the night to see whether it changed."},
                {id:"hunter",name:"Hunter",team:"village",description:"If you are killed, the player you are pointing at also dies."},
                {id:"tanner",name:"Tanner",team:"solo",description:"You want to get yourself voted out. You win if you die."}
            ]
        },
        {
            id: "daybreak",
            title: "Daybreak",
            roles: [
                {id:"sentinel",name:"Sentinel",team:"village",description:"Place a shield on another player's card. That card cannot be viewed, moved, or receive an artifact."},
                {id:"alpha-wolf",name:"Alpha Wolf",team:"wolf",description:"Wake with the Werewolves, then exchange the special center Werewolf card with another player's card without looking."},
                {id:"mystic-wolf",name:"Mystic Wolf",team:"wolf",description:"Wake with the Werewolves and look at one other player's card."},
                {id:"dream-wolf",name:"Dream Wolf",team:"wolf",description:"You are a Werewolf but do not wake with the other Werewolves. They do not know who you are."},
                {id:"apprentice-seer",name:"Apprentice Seer",team:"village",description:"Look at one card from the center."},
                {id:"paranormal-investigator",name:"Paranormal Investigator",team:"variable",description:"Look at up to two other players' cards. If you find a non-village role, you become that role and join its team."},
                {id:"witch",name:"Witch",team:"village",description:"Look at one center card and, if you wish, exchange it with another player's card."},
                {id:"village-idiot",name:"Village Idiot",team:"village",description:"You may move all players' cards one position clockwise or counterclockwise, including your own."},
                {id:"revealer",name:"Revealer",team:"village",description:"You may reveal another player's card. If it is a Werewolf, it is turned face down again."},
                {id:"curator",name:"Curator",team:"village",description:"Place an artifact token on another player's card. The artifact gives that player an additional effect."},
                {id:"bodyguard",name:"Bodyguard",team:"village",description:"Choose another player to protect. If that player receives the most votes, you die instead."}
            ]
        },
        {
            id: "vampire",
            title: "Vampire",
            roles: [
                {id:"copycat",name:"Copycat",team:"variable",description:"Look at one center card. You become that role and join its team. If that role is called, perform its action."},
                {id:"vampire",name:"Vampire",team:"vampire",description:"Wake up with the other Vampires and identify your teammates. Vampires win if at least one Vampire survives."},
                {id:"master",name:"The Master",team:"vampire",description:"Wake with the Vampires and identify your teammates. You are a member of the Vampire team."},
                {id:"count",name:"The Count",team:"vampire",description:"Wake with the Vampires and identify your teammates. You are a member of the Vampire team."},
                {id:"renfield",name:"Renfield",team:"vampire",description:"Learn who the Vampires are. You are on their team, but are not a Vampire yourself."},
                {id:"cupid",name:"Cupid",team:"village",description:"Give the Mark of Love to up to two players. If either lover dies, the other dies too."},
                {id:"diseased",name:"Diseased",team:"village",description:"Give the Mark of Disease to a player. The affected player's team receives a special restriction on winning."},
                {id:"instigator",name:"Instigator",team:"village",description:"Give another player the Mark of the Traitor. That player must have a teammate killed to win."},
                {id:"priest",name:"Priest",team:"village",description:"Give a player the Mark of Clarity, allowing them to learn information about their role or mark."},
                {id:"assassin",name:"Assassin",team:"solo",description:"Give a player the Mark of the Assassin. Your objective is to have the marked player killed."},
                {id:"apprentice-assassin",name:"Apprentice Assassin",team:"solo",description:"You have the Assassin's objective, but use the Apprentice Assassin's special marking ability."},
                {id:"marksman",name:"Marksman",team:"village",description:"Look at one player's card and/or another player's Mark."},
                {id:"pickpocket",name:"Pickpocket",team:"village",description:"Exchange your Mark with another player's Mark, then look at your new Mark."},
                {id:"gremlin",name:"Gremlin",team:"village",description:"Exchange either the cards or the Marks of two players without looking at them."}
            ]
        },
        {
            id: "alien",
            title: "Alien",
            roles: [
                {id:"alien",name:"Alien",team:"alien",description:"Wake up with the other Aliens. The Alien team wins if no Alien is killed."},
                {id:"synthetic-alien",name:"Synthetic Alien",team:"solo",description:"Wake with the Aliens, but you have your own objective. You win if you are killed. Everyone on the Alien and Village teams loses."},
                {id:"oracle",name:"Oracle",team:"village",description:"Answer a question from the game app during the night."},
                {id:"cow",name:"Cow",team:"village",description:"Extend your fist while the Aliens wake up. An Alien sitting next to you must tap your fist."},
                {id:"groob",name:"Groob",team:"alien",description:"Wake with the Aliens. If Zerb is also in the game, you win if Zerb dies and you survive."},
                {id:"zerb",name:"Zerb",team:"alien",description:"Wake with the Aliens. If Groob is also in the game, you win if Groob dies and you survive."},
                {id:"leader",name:"Leader",team:"village",description:"Learn how many Aliens are in play by having the Aliens extend their thumbs. Your victory depends on the Alien situation."},
                {id:"psychic",name:"Psychic",team:"village",description:"Use the game app's instructions to look at one or more cards."},
                {id:"rascal",name:"Rascal",team:"village",description:"Use the game app's instructions to move two or more cards."},
                {id:"exposer",name:"Exposer",team:"village",description:"Turn over one or more center cards as instructed by the game app. Leave them face up."},
                {id:"blob",name:"Blob",team:"independent",description:"You absorb neighboring players into your Blob group. You win if none of the players in your group are killed."},
                {id:"mortician",name:"Mortician",team:"independent",description:"Look at one or both neighboring players' cards as instructed. You win if at least one neighbor dies."}
            ]
        },
        {
            id: "super-villains",
            title: "Super Villains",
            roles: [
                {id:"mirror-man",name:"Mirror Man",team:"hero",description:"Look at another player's card and become a copy of that role, joining its team."},
                {id:"evilometer",name:"Evilometer",team:"hero",description:"Use your special ability to determine information about the evil players."},
                {id:"annoying-lad",name:"Annoying Lad",team:"hero",description:"Use your special ability to interfere with another player's information or actions."},
                {id:"detector",name:"Detector",team:"hero",description:"Use your ability to investigate other players and identify potential villains."},
                {id:"role-retriever",name:"Role Retriever",team:"hero",description:"Use your ability to retrieve information about a role or card."},
                {id:"voodoo-lou",name:"Voodoo Lou",team:"hero",description:"Use your special ability to affect another player's role or game state."},
                {id:"switcheroo",name:"Switcheroo",team:"hero",description:"Use your ability to switch cards or otherwise alter players' roles."},
                {id:"self-awareness-girl",name:"Self-Awareness Girl",team:"hero",description:"Use your special ability to gain information about your own role."},
                {id:"flipper",name:"Flipper",team:"hero",description:"Use your ability to flip cards and reveal information."},
                {id:"innocent-bystander",name:"Innocent Bystander",team:"hero",description:"You have no special night action. You win if the Hero team wins."},
                {id:"temptress",name:"Temptress",team:"villain",description:"Use your special ability to manipulate the other players and help the Villain team."},
                {id:"dr-peeker",name:"Dr. Peeker",team:"villain",description:"Use your special ability to gain information about other players."},
                {id:"rapscallion",name:"Rapscallion",team:"villain",description:"Use your special ability to interfere with the Heroes and help the Villains survive."},
                {id:"henchman-7",name:"Henchman #7",team:"villain",description:"Help the Villain team by using your special ability and avoiding detection."},
                {id:"mad-scientist",name:"Mad Scientist",team:"mad",description:"Use your special ability to manipulate the game and pursue your own team's objective."},
                {id:"intern",name:"Intern",team:"mad",description:"Assist the Mad Scientist and work toward the Mad team's objective."}
            ]
        },
        {
            id: "bonus",
            title: "Bonus Roles",
            roles: [
                {id:"aura-seer",name:"Aura Seer",team:"village",description:"Look at another player's card and determine whether they have a special ability."},
                {id:"cursed",name:"Cursed",team:"village",description:"You begin on the Village team. If a Werewolf or Vampire votes for you, you become part of that team."},
                {id:"prince",name:"Prince",team:"village",description:"You cannot be killed by the vote. Your special protection affects the outcome of the vote."},
                {id:"apprentice-tanner",name:"Apprentice Tanner",team:"solo",description:"You want to be killed during the vote, just like the Tanner."},
                {id:"beholder",name:"Beholder",team:"village",description:"You know who the Seer is, but the Seer does not know who you are."},
                {id:"thing",name:"Thing That Goes Bump in the Night",team:"village",description:"Wake up and tap another player's hand or arm to secretly identify yourself."},
                {id:"squire",name:"Squire",team:"wolf",description:"Wake up and look at the Werewolves' cards to learn who they are."},
                {id:"body-snatcher",name:"Body Snatcher",team:"alien",description:"Wake with the Aliens and use your special ability to take over another player's role."},
                {id:"empath",name:"Empath",team:"village",description:"Use your special ability to learn information about the players around you."},
                {id:"nostradamus",name:"Nostradamus",team:"variable",description:"Look at cards as instructed. Your final team depends on the last card you examine."},
                {id:"family-man",name:"Family Man",team:"independent",description:"Your objective is connected to the other Family Man roles in play."},
                {id:"windy-wendy",name:"Windy Wendy",team:"hero",description:"You begin on the Hero team. If a Villain votes for you, you become a Villain."},
                {id:"defender-er",name:"Defender-er",team:"hero",description:"Protect another player using your special defensive ability."},
                {id:"sponge",name:"The Sponge",team:"hero",description:"Use your special ability to absorb or copy an effect from another player."},
                {id:"ricochet-rhino",name:"Ricochet Rhino",team:"hero",description:"Your special objective involves the direction and outcome of the vote."},
                {id:"second-innocent-bystander",name:"Innocent Bystander",team:"hero",description:"You have no special night action. You win if the Hero team wins."}
            ]
        }
    ]
};

var TEAM_LABELS = {
    village: "Village",
    wolf: "Werewolf",
    solo: "Solo",
    alien: "Alien",
    vampire: "Vampire",
    hero: "Hero",
    villain: "Villain",
    mad: "Mad Scientist",
    independent: "Independent",
    variable: "To Be Determined"
};
