var ROLE_DATA = {
    title: "Werewolf Roles",
    subtitle: "Tap a role to view abilities",

    groups: [
        {
            id: "base",
            title: "Base game",
            roles: [
                {
                    id: "werewolf",
                    name: "Werewolf",
                    team: "wolf",
                    description: "The Werewolves are trying not to get voted out."
                },
                {
                    id: "villager",
                    name: "Villager",
                    team: "village",
                    description: "The villager does nothing (skill issue). Try to vote out the Werewolves to win."
                },
                {
                    id: "doppelganger",
                    name: "Doppelganger",
                    team: "variable",
                    description: "The Doppelganger can look at one player's card. They then become a copy of that card and join the team it belongs to."
                },
                {
                    id: "minion",
                    name: "Minion",
                    team: "wolf",
                    description: "The Minion gets to see who the Werewolves are and does everything to keep the Werewolves from getting voted out (even getting themselves voted to protect them). You win if the werewolves are alive after the vote."
                },
                {
                    id: "mason",
                    name: "Mason",
                    team: "village",
                    description: "The Masons get to see who each other are, which makes determining the Werewolves that much easier."
                },
                {
                    id: "seer",
                    name: "Seer",
                    team: "village",
                    description: "You get to look at one other player's card or two cards from the center."
                },
                {
                    id: "robber",
                    name: "Robber",
                    team: "variable",
                    description: "The Robber may swap their card with another player and then look at their new card (you are now on that team)."
                },
                {
                    id: "troublemaker",
                    name: "Troublemaker",
                    team: "village",
                    description: "The Troublemaker may choose to swap two other player's cards without looking at their roles."
                },
                {
                    id: "drunk",
                    name: "Drunk",
                    team: "variable",
                    description: "The Drunk may swap their card with a card from the center, but they do not look at their new role."
                },
                {
                    id: "insomniac",
                    name: "Insomniac",
                    team: "village",
                    description: "The Insomniac gets to look at their own card once everyone has done their action."
                },
                {
                    id: "hunter",
                    name: "Hunter",
                    team: "village",
                    description: "If the Hunter gets voted out, whoever they are pointing to also dies."
                },
                {
                    id: "tanner",
                    name: "Tanner",
                    team: "solo",
                    description: "The Tanner wants to get themselves voted out in order to win."
                }
            ]
        },

        {
            id: "daybreak",
            title: "Daybreak",
            roles: [
                {
                    id: "sentinel",
                    name: "Sentinel",
                    team: "village",
                    description: "The Sentinel may place a Shield token on any player's card (except their own). That card cannot be viewed, moved, or swapped by anyone during the night."
                },
                {
                    id: "alpha-wolf",
                    name: "Alpha Wolf",
                    team: "wolf",
                    description: "Wakes up with the Werewolves, then wakes separately to swap the extra center Werewolf card with any other non-Werewolf player's card (turning that player into a Werewolf)."
                },
                {
                    id: "mystic-wolf",
                    name: "Mystic Wolf",
                    team: "wolf",
                    description: "Wakes up with the Werewolves, then wakes separately to look at one other player's card."
                },
                {
                    id: "dream-wolf",
                    name: "Dream Wolf",
                    team: "wolf",
                    description: "Does not wake up with the other Werewolves at night. Instead, sticks out their thumb so the other Werewolves know who they are."
                },
                {
                    id: "apprentice-seer",
                    name: "Apprentice Seer",
                    team: "village",
                    description: "The Apprentice Seer may look at one card from the center."
                },
                {
                    id: "paranormal-investigator",
                    name: "Paranormal Investigator",
                    team: "variable",
                    description: "May look at up to two other players' cards. If you see a Werewolf or Tanner, you stop immediately and become that role and team."
                },
                {
                    id: "witch",
                    name: "Witch",
                    team: "variable",
                    description: "The Witch may look at one center card. If they do, they must swap that center card with any player's card (including their own)."
                },
                {
                    id: "village-idiot",
                    name: "Village Idiot",
                    team: "village",
                    description: "The Village Idiot may move every other player's card either one space clockwise or one space counter-clockwise (leaving their own card and any Shielded cards unmoved)."
                },
                {
                    id: "revealer",
                    name: "Revealer",
                    team: "village",
                    description: "Flips one other player's card face up. If it is a Werewolf or Tanner, the Revealer must flip it back face down."
                },
                {
                    id: "curator",
                    name: "Curator",
                    team: "variable",
                    description: "May place a random face-down Artifact token on any player's card (including their own), which can alter that player's role, team, or behavior during the day."
                },
                {
                    id: "bodyguard",
                    name: "Bodyguard",
                    team: "village",
                    description: "Has no night action. During the day vote, whoever the Bodyguard points to cannot be killed (the player with the next-highest votes dies instead)."
                }
            ]
        },

        {
            id: "vampire",
            title: "Vampire",
            roles: [
                {
                    id: "copycat",
                    name: "Copycat",
                    team: "variable",
                    description: "During Dusk, looks at one center card and becomes that role for the rest of the night, waking up when that role is called."
                },
                {
                    id: "vampire",
                    name: "Vampire",
                    team: "vampire",
                    description: "Wakes up with the other Vampires and places the Mark of the Vampire on a non-Vampire player, turning them onto the Vampire team."
                },
                {
                    id: "the-master",
                    name: "The Master",
                    team: "vampire",
                    description: "Wakes up with the Vampires. During the vote, if at least one Vampire votes for The Master, The Master cannot be killed."
                },
                {
                    id: "the-count",
                    name: "The Count",
                    team: "vampire",
                    description: "Wakes up with the Vampires, then wakes separately to place the Mark of Fear on any non-Vampire player, preventing them from performing their night action."
                },
                {
                    id: "renfield",
                    name: "Renfield",
                    team: "vampire",
                    description: "Sees who the Vampires are and places the Mark of the Bat on themselves. Renfield wins if no Vampires are killed (even if Renfield dies)."
                },
                {
                    id: "diseased",
                    name: "Diseased",
                    team: "village",
                    description: "Places the Mark of Disease on an adjacent player. Anyone who votes for a player with the Mark of Disease cannot win the game."
                },
                {
                    id: "cupid",
                    name: "Cupid",
                    team: "village",
                    description: "Places the two Marks of Love on any two other players. If either marked player is killed at the end of the game, the other dies with them."
                },
                {
                    id: "instigator",
                    name: "Instigator",
                    team: "variable",
                    description: "Places the Mark of the Traitor on any player (including themselves). That player only wins if a player on their own original team is killed."
                },
                {
                    id: "priest",
                    name: "Priest",
                    team: "village",
