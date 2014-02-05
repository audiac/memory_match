$(document).ready(function() {
   
   var firstCard = 0;
   var secondCard = 0;
   var cardsFlipped = 0;
   var numMatches = 0;
   var flipped = [];
   
   function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    } 

    return array;
   }

   var numArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
   shuffle(numArray);
   console.log(numArray);
   
   for (var i = 0; i < numArray.length; i++) {
    $('#p' + (i+1)).append(numArray[i]);
   };
   
   function compareCards(object) {
    console.log("We are now in the compareCards function with " + object);
    console.log("The value of firstCard is " + firstCard);
    console.log("The value of secondCard is " + secondCard);
    if (firstCard === secondCard) {
        console.log("We have a match!");
        numMatches += 1;
        if (numMatches === 18) {
            $("#messages").append("You Won!");
        }
        else {
            $("#messages").append("Match!");
        }
    }
    else {
        console.log("No match. Try again.");
        setTimeout(function() {
            flipped[0].css("background-color", '#265E8C');
            flipped[1].css("background-color", '#265E8C');
        }, 1000);
    }
    cardsFlipped = 0;
   }
   
   $('.card').click(function() {
    $("#messages").empty();
    $(this).css("background-color", '#FFF');
    if (cardsFlipped === 0) {
        firstCard = $(this).text();
        flipped[0] = $(this);
        cardsFlipped = 1;
    }
    else {
        secondCard = $(this).text();
        flipped[1] = $(this);
        compareCards(this);
    }
   });
   
});