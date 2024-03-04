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
    {
        name: "Jolly Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+8 Mult</span> if played hand contains a Pair",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "jolly_joker"
    },
    {
        name: "Zany Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+12 Mult</span> if played hand contains a Three of a Kind",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "zany_joker"
    },
    {
        name: "Mad Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+20 Mult</span> if played hand contains a Four of a Kind",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "mad_joker"
    },
    {
        name: "Crazy Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+12 Mult</span> if played hand contains a Straight",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "crazy_joker"
    },
    {
        name: "Droll Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+10 Mult</span> if played hand contains a Flush",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "droll_joker"
    },
    {
        name: "Sly Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+50 Chips</span> if played hand contains a Pair",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "sly_joker"
    },
    {
        name: "Wily Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+100 Chips</span> if played hand contains a Three of a Kind",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "wily_joker"
    },
    {
        name: "Clever Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+150 Chips</span> if played hand contains a Four of a Kind",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "clever_joker"
    },
    {
        name: "Devious Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+100 Chips</span> if played hand contains a Straight",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "devious_joker"
    },
    {
        name: "Crafty Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+80 Chips</span> if played hand contains a Flush",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        image: "droll_joker"
    },
    {
        name: "",
        rarity: "",
        cost: 0,
        effect: "",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        image: "_joker"
    }
]

let sortByName = false;

function init() {
    displayJokers();
}

function displayJokers(sortByName) {
    jokers.sort(function(a, b) {
        console.log(a.name);
        console.log(b.name);
        return a === b ? 0 : a.name < b.name ? -1 : 1;
    });

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

$('input[type="checkbox"]').change(function() {
    checkCheckboxes();
    displayJokers(sortByName);
});

function checkCheckboxes() {
    if($('#name').is(':checked')){
        sortByName = true;
    } else {
        sortByName = false;
    }
    return sortByName;
}

init();