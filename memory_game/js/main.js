var myFunction = function() {
	document.getElementById('myForm').reset();
}


var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
//Function alert whether or not you found a match
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
};

//
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	};
};
console.log(cardsInPlay);

//game-board front/back images 
var createBoard = function() {
	var cardTable = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardTable.appendChild(cardElement);
		
	}
};
createBoard();
