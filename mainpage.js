// This is the JavaScript file of blackJack website.
// Here 1 and 11 considered as Ace
// Cards between value 2 and 9 considered as same as card
// The value of Jack, Queen, King and 10th card considered as value = 10
// You can only win if you can get a total sum of card equal to 21
// If sum is greater than 21 You are out of the game
// If sum is less than 21 then You can draw an Extra card

let card = []
let sum = 0
let spades = ['<img src="SPADE/2nd.png" alt=2 of Spades"" >', '<img src="SPADE/3rd.png" alt="3 of Spades" >',
    '<img src="SPADE/4th.png" alt="4 of Spades" >', '<img src="SPADE/5th.png" alt="5 of Spades" >', '<img src="SPADE/6th.png" alt="6 of spades">',
    '<img src="SPADE/7th.png" alt="7 of Spades">', '<img src="SPADE/8th.png" alt="8 of Spades">', '<img src="SPADE/9th.png" alt="9 of Spades" >']

let onlyfor10 = [
    '<img src="SPADE/10th.png" alt="10 of Spades">', '<img src="SPADE/Jack.png" alt="Jack of Spades">', '<img src="SPADE/Queen.png" alt="Queen of Spades" ',
    '<img src="SPADE/King.png" alt="King of Spades">', '<img src="CLUB/Jack.png" alt="Jack of Cloves">', '<img src="CLUB/10th.png" alt="10 of Cloves">', '<img src="CLUB/Queen.png" alt="Queen of Cloves" ',
    '<img src="CLUB/King.png" alt="King of Cloves">', '<img src="HEARTS/10th.png" alt="10 of Hearts">', '<img src="HEARTS/Jack.png" alt="Jack of Hearts">', '<img src="HEARTS/Queen.png" alt="Queen of Hearts" ',
    '<img src="HEARTS/King.png" alt="King of Hearts">', '<img src="DIAMOND/10th.png" alt="10 of Diamond">', '<img src="DIAMOND/Jack.png" alt="Jack of Diamond">', '<img src="DIAMOND/Queen.png" alt="Queen of Diamond" ',
    '<img src="DIAMOND/King.png" alt="King of Diamond">']

let club = ['<img src="CLUB/2nd.png" alt=2 of Cloves"" >', '<img src="CLUB/3rd.png" alt="3 of Cloves" >',
    '<img src="CLUB/4th.png" alt="4 of Cloves" >', '<img src="CLUB/5th.png" alt="5 of Cloves" >', '<img src="CLUB/6th.png" alt="6 of spades">',
    '<img src="CLUB/7th.png" alt="7 of Cloves">', '<img src="CLUB/8th.png" alt="8 of Cloves">', '<img src="CLUB/9th.png" alt="9 of Cloves" >']

let hearts = ['<img src="HEARTS/2nd.png" alt=2 of Hearts"" >', '<img src="HEARTS/3rd.png" alt="3 of Hearts" >',
    '<img src="HEARTS/4th.png" alt="4 of Hearts" >', '<img src="HEARTS/5th.png" alt="5 of Hearts" >', '<img src="HEARTS/6th.png" alt="6 of spades">',
    '<img src="HEARTS/7th.png" alt="7 of Hearts">', '<img src="HEARTS/8th.png" alt="8 of Hearts">', '<img src="HEARTS/9th.png" alt="9 of Hearts" >']

let diamonds = ['<img src="DIAMOND/2nd.png" alt=2 of Diamond"" >', '<img src="DIAMOND/3rd.png" alt="3 of Diamond" >',
    '<img src="DIAMOND/4th.png" alt="4 of Diamond" >', '<img src="DIAMOND/5th.png" alt="5 of Diamond" >', '<img src="DIAMOND/6th.png" alt="6 of spades">',
    '<img src="DIAMOND/7th.png" alt="7 of Diamond">', '<img src="DIAMOND/8th.png" alt="8 of Diamond">', '<img src="DIAMOND/9th.png" alt="9 of Diamond" >']


let ace1 = ['<img src="SPADE/Ace.png" alt="Ace of Spades">', '<img src="CLUB/Ace.png" alt="Ace of Cloves">', '<img src="HEARTS/Ace.png" alt="Ace of Hearts">', '<img src="DIAMOND/Ace.png" alt="Ace of Diamond">']

let canplay = false
let hasblackjack = false
function getRandomNumber() {
    let randcard = Math.floor(Math.random() * 13) + 1
    if (randcard > 10) {
        return 10
    }
    else if (randcard === 1) {
        return 11
    }
    else {
        return randcard
    }
}
function startgame() {
    canplay = true
    hasblackjack = false
    document.getElementById("h-img").innerHTML = ""
    let firstCard = getRandomNumber()
    card = [firstCard]
    sum = firstCard
    renderimage(firstCard)
    rendergame()
}

function rendergame() {
    document.getElementById("display-cards").textContent = "CARDS : "
    for (let i = 0; i < card.length; i++) {
        document.getElementById("display-cards").textContent += card[i] + " "
    }
    document.getElementById("sum-el").textContent = "SUM : " + sum
    if (sum < 21) {
        document.getElementById("hidden-text").textContent = "CLICK ON NEW CARD"
    }
    else if (sum === 21) {
        document.getElementById("hidden-text").textContent = "WOW! YOU'VE GOT A BLACKJACK"
        hasblackjack = true

    }
    else {
        document.getElementById("hidden-text").textContent = "YOU ARE OUT OF THE GAME"
        canplay = false
    }
}
function newgame() {
    if (hasblackjack === true) {
        document.getElementById("hidden-text").textContent = "CAN'T DRAW ANOTHER CARD BECAUSE YOU HAVE ALREADY GOT THE BLACKJACK. START NEW GAME TO PLAY MORE."
    } else if (canplay === false) {
        document.getElementById("hidden-text").textContent = "CLICK ON START GAME TO PLAY MORE."
    }
    else if (canplay === true && hasblackjack === false) {
        let newcard = getRandomNumber()
        sum += newcard
        card.push(newcard)
        renderimage(newcard)
        rendergame()
    }
}
function getarrayNumber() {
    let randarray = Math.floor(Math.random() * 4) + 1
    console.log(randarray)
    return randarray
}

function renderimage(card) {
    let firstarray = getarrayNumber()
    
    if (card >= 2 && card <= 9) {
        if (firstarray === 1) {
            document.getElementById("h-img").innerHTML += spades[card - 2]
        } else if (firstarray === 2) {
            document.getElementById("h-img").innerHTML += club[card - 2]
        } else if (firstarray === 3) {
            document.getElementById("h-img").innerHTML += hearts[card - 2]
        } else if (firstarray === 4) {
            document.getElementById("h-img").innerHTML += diamonds[card - 2]
        }
    }
    else if (card == 10) {
        let secondeEl = anotherRandom()
        document.getElementById("h-img").innerHTML += onlyfor10[secondeEl]
    }
    else if (card === 11 || card === 1) {
        let aceEl= getarrayNumber()
        document.getElementById("h-img").innerHTML += ace1[aceEl-1]
    }
}

function anotherRandom() {
    let randnum = Math.floor(Math.random() * 16)
    return randnum
}