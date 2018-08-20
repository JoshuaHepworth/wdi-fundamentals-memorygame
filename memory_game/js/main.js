
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = cards[0];
cards.push(cardsInPlay);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cards.push(cardsInPlay);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 || cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}