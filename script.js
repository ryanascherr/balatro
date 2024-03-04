const jokers = [
    {
        name: "Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+4 Mult</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "basic_joker"
    },
    {
        name: "Greedy Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with Diamond suit give <span class='mult'>+4 Mult</span> when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "greedy_joker"
    },
    {
        name: "Lusty Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with Heart suit give <span class='mult'>+4 Mult</span> when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "lusty_joker"
    },
    {
        name: "Wrathful Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with Spade suit give <span class='mult'>+4 Mult</span> when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "wrathful_joker"
    },
    {
        name: "Gluttonous Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with Club suit give <span class='mult'>+4 Mult</span> when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "gluttonous_joker"
    },
    // {
    //     name: "",
    //     rarity: "",
    //     cost: 0,
    //     effect: "",
    //     hasChips: false,
    //     hasPlusMult: false,
    //     hasTimesMult: false
    // }
]

function init() {
    displayJokers();
}

function displayJokers() {
    $.each(jokers, function(index, joker) { 
        $("#jokers").append(`
        <div class="joker">
          <div class="image">
            <img src="/img/${joker.image}.png">
          </div>
          <p><strong>Name:</strong> ${joker.name}</p>
          <p><strong>Rarity:</strong> ${joker.rarity}</p>
          <p><strong>Cost:</strong> $${joker.cost}</p>
          <p><strong>Effect:</strong> ${joker.effect}</p>
        </div>`)
    });
}

init();