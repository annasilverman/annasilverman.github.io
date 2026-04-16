
function flipCard() {
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

        let card1 = allClickedCards[0].classList.toString();
        let card2 = allClickedCards[1].classList.toString();

        if(card1==card2){
            console.log("it's a match!");
        }else{
            console.log("not a macth :(")
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