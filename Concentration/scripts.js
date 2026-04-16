
//track number of turns
let playerClicks = 0;


//clear clicked classes
function clearClicked(){
    let allClickedCards = document.querySelectorAll(".clicked");
    for (let eachCard of allClickedCards) {
        eachCard.classList.remove("clicked");
    }

    //increases player turns by 1
    playerClicks++;
    document.querySelector("#turnCount span").innerHTML = playerClicks;

    //checks for winning
    let allCards = document.querySelectorAll(".card");
    let matchedCards = document.querySelectorAll(".matched");
    if(allCards.length == matchedCards.length){
        //player has matched all cards
        document.querySelector("#winning").innerHTML = "You won!";
        document.querySelector("#winning").style.display = "block";
        console.log("won game");
    }
}

function flipCard() {

    //makes matches unclickable
    if (!this.classList.contains("matched")){

    let allClickedCards = document.querySelectorAll(".clicked");

    //only lets user click if they have clicked less than two cards
    if (allClickedCards.length<2){

        //adds clicked class to clicked card
        this.classList.add("clicked");
    }
    //wifi PLSSSS

    //check if card is a pair
    allClickedCards = document.querySelectorAll(".clicked");

    if(allClickedCards.length == 2){
  
//going to forgo the variable here because i like how the card doesnt flip during the transition
        let card1 = allClickedCards[0].classList.toString();
        let card2 = allClickedCards[1].classList.toString();

        if(card1==card2){
            console.log("it's a match!");
            allClickedCards[0].classList.add("matched");
            allClickedCards[1].classList.add("matched");
            window.setTimeout(clearClicked, 2000);
        }else{
            console.log("not a macth :(")
            window.setTimeout(clearClicked, 1000);
        }
    }
    }   

}

//runs when DOM loads
document.addEventListener("DOMContentLoaded", function(e){

    //randomize cards
    let allCards = document.querySelectorAll(".card");
    let gameboard = document.querySelector("#gameboard");

    // loop through all the cards
    for (x=0; x<allCards.length; x++) {
        let randNum = Math.floor(Math.random() * allCards.length);
        gameboard.insertBefore( allCards[x], gameboard.children[randNum] );

        allCards[x].addEventListener("click", flipCard);
    }

    

});