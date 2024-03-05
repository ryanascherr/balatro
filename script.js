const jokers = [
    {
        name: "Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+4</span> Mult",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "basic_joker"
    },
    {
        name: "Greedy Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with <span class='diamond'>Diamond</span> suit give <span class='mult'>+4</span> Mult when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "greedy_joker"
    },
    {
        name: "Lusty Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with <span class='heart'>Heart</span> suit give <span class='mult'>+4</span> Mult when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "lusty_joker"
    },
    {
        name: "Wrathful Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with <span class='spade'>Spade</span> suit give <span class='mult'>+4</span> Mult when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "wrathful_joker"
    },
    {
        name: "Gluttonous Joker",
        rarity: "Common",
        cost: 4,
        effect: "Played cards with <span class='club'>Club</span> suit give <span class='mult'>+4</span> Mult when scored",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "gluttonous_joker"
    },
    {
        name: "Jolly Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+8</span> Mult if played hand contains a <span class='proper'>Pair</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "jolly_joker"
    },
    {
        name: "Zany Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+12</span> Mult if played hand contains a <span class='proper'>Three of a Kind</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "zany_joker"
    },
    {
        name: "Mad Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+20</span> Mult if played hand contains a <span class='proper'>Four of a Kind</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "mad_joker"
    },
    {
        name: "Crazy Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+12</span> Mult if played hand contains a <span class='proper'>Straight</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "crazy_joker"
    },
    {
        name: "Droll Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+10</span> Mult if played hand contains a <span class='proper'>Flush</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "droll_joker"
    },
    {
        name: "Sly Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+50</span> Chips if played hand contains a <span class='proper'>Pair</span>",
        hasChips: true,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "sly_joker"
    },
    {
        name: "Wily Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+100</span> Chips if played hand contains a <span class='proper'>Three of a Kind</span>",
        hasChips: true,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "wily_joker"
    },
    {
        name: "Clever Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+150</span> Chips if played hand contains a <span class='proper'>Four of a Kind</span>",
        hasChips: true,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "clever_joker"
    },
    {
        name: "Devious Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+100</span> Chips if played hand contains a <span class='proper'>Straight</span>",
        hasChips: true,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "devious_joker"
    },
    {
        name: "Crafty Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='chips'>+80</span> Chips if played hand contains a <span class='proper'>Flush</span>",
        hasChips: true,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "droll_joker"
    },
    {
        name: "Half Joker",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+20</span> Mult if played hand contains <span class='proper'>3</span> or fewer cards",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "half_joker"
    },
    {
        name: "Joker Stencil",
        rarity: "Uncommon",
        cost: 8,
        effect: "<span class='times'>X1</span> Mult for each empty <span class='proper'>Joker</span> slot",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: true,
        hasMoney: false,
        hasSupport: false,
        image: "joker_stencil"
    },
    {
        name: "Four Fingers",
        rarity: "Uncommon",
        cost: 6,
        effect: "All <span class='proper'>Flushes</span> and <span class='proper'>Straights</span> can be made with 4 cards",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: true,
        image: "four_fingers"
    },
    {
        name: "Mime",
        rarity: "Uncommon",
        cost: 4,
        effect: "Retrigger all card <span class='proper'>held in hand</span> abilities",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: true,
        image: "mime"
    },
    {
        name: "Credit Card",
        rarity: "Common",
        cost: 1,
        effect: "Go up to <span class='mult'>-$20</span> in debt",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: true,
        hasSupport: true,
        image: "credit_card"
    },
    {
        name: "Ceremonial Dagger",
        rarity: "Uncommon",
        cost: 8,
        effect: "When <span class='proper'>Blind</span> is selected, destroy card to the right and permanently add <span class='proper'>double</span> its sell value to this <span class='mult'>Mult</span>",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "ceremonial_dagger"
    },
    {
        name: "Banner",
        rarity: "Common",
        cost: 6,
        effect: "<span class='chips'>+40</span> Chips for each remaining <span class='proper'>discard</span>",
        hasChips: true,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "banner"
    },
    {
        name: "Mystic Summit",
        rarity: "Common",
        cost: 5,
        effect: "<span class='mult'>+15</span> Mult when <span class='proper'>0</span> discards remaining",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "mystic_summit"
    },
    {
        name: "Marble Joker",
        rarity: "Uncommon",
        cost: 6,
        effect: "Adds one <span class='proper'>Stone</span> card to deck when <span class='proper'>Blind</span> is selected",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: true,
        image: "marble_joker"
    },
    {
        name: "Loyalty Card",
        rarity: "Uncommon",
        cost: 6,
        effect: "<span class='times'>X4</span> Mult every <span class='proper'>6</span> hands played",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: true,
        hasMoney: false,
        hasSupport: false,
        image: "loyalty_card"
    },
    {
        name: "8 Ball",
        rarity: "Uncommon",
        cost: 0,
        effect: "Create a <span class='chips'>Planet</span> if played hand contains 2 or more <span class='proper'>8s</span>",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: true,
        image: "8_ball"
    },
    {
        name: "Misprint",
        rarity: "Common",
        cost: 4,
        effect: "<span class='mult'>+[Random]</span> Mult",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "misprint"
    },
    {
        name: "Dusk",
        rarity: "Uncommon",
        cost: 0,
        effect: "Retrigger all played cards in <span class='proper'>final hand</span> of round",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: true,
        image: "dusk"
    },
    {
        name: "Raised Fist",
        rarity: "Common",
        cost: 0,
        effect: "Adds <span class='proper'>double</span> the rank of <span class='proper'>lowest</span> card held in hand to Mult",
        hasChips: false,
        hasPlusMult: true,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: "raised_fist"
    },
    {
        name: "Chaos the Clown",
        rarity: "Common",
        cost: 5,
        effect: "<span class='proper'>1</span> free <span class='club'>Reroll</span> per shop",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: true,
        image: "chaos_the_clown"
    },
    {
        name: "",
        rarity: "",
        cost: 0,
        effect: "",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: ""
    },
    {
        name: "",
        rarity: "",
        cost: 0,
        effect: "",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: ""
    },
    {
        name: "",
        rarity: "",
        cost: 0,
        effect: "",
        hasChips: false,
        hasPlusMult: false,
        hasTimesMult: false,
        hasMoney: false,
        hasSupport: false,
        image: ""
    }
]

let sortByOrder = true;
let sortByName = false;

function init() {
    displayJokers();
}

function displayJokers() {
    // sortJokers();
    console.log(jokers);
    console.log(sortByName);
    console.log(sortByOrder);
    let newArrayOfJokers = jokers;
    if (sortByOrder) {

    }
    if (sortByName) {
        newArrayOfJokers.slice().sort(function(a, b) {
            return a === b ? 0 : a.name < b.name ? -1 : 1;
        });
    }

    console.log(jokers);

    $("#jokers").empty();

    $.each(newArrayOfJokers, function(index, joker) { 
        $("#jokers").append(
        `<div class="joker">
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
    displayJokers(sortByName, sortByOrder);
});

function checkCheckboxes() {
    if($('#order').is(':checked')){
        sortByOrder = true;
        sortByName = false;
    } else {
        sortByOrder = false;
    }
    if($('#name').is(':checked')){
        sortByName = true;
        sortByOrder = false;
    } else {
        sortByName = false;
    }


}

init();