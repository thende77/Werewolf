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
                    id: "alpha-wolf",
                    name: "Alpha Wolf",
                    team: "wolf",
                    description: "",
                    ability: "",
                    timing: "Night",
                    winCondition: ""
                }
            ]
        },

        {
            id: "alien",
            title: "Alien",
            roles: [
                {
                    id: "alien",
                    name: "Alien",
                    team: "alien",
                    description: "Text Here"
                }
            ]
        }
    ]
};

var TEAM_LABELS = {
    village: "Village",
    wolf: "Werewolf",
    solo: "Solo",
    alien: "Alien",
    variable: "To Be Determined"
};
