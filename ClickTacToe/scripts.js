// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "-", "-", "-" ];
let rowB = [ "-", "-", "-" ];
let rowC = [ "-", "-", "-" ];

//tracking which turn it is 
let currentTurn = "x";

//track number of turns left
let remainingTurns = 9;

//sets up current player for dom element
    let currentPlayer;

    
function checkGameboard(checkA, checkB, checkC){ 
let resultValue= "d";
  
console.log("checking the rows of the gameboard");
  
  if(checkRow(checkA) != "d") resultValue = checkRow(checkA);
  else if(checkRow(checkB) != "d") resultValue = checkRow(checkB);
  else if(checkRow(checkC) != "d") resultValue = checkRow(checkC);
  
  //OOOOOOOOOOOOOO IM SO HYPED THIS WORKED
console.log("time to check the columns resultValue= " + resultValue);
  
  for(let i =0; i<3; i++ ){
  if(checkArray(checkA[i], checkB[i], checkC[i]) != "d") resultValue=checkArray(checkA[i], checkB[i], checkC[i]);
  }
  
console.log("checking diagnols using checkArrayresultValue= " + resultValue);
  
  if(checkArray(checkA[0], checkB[1], checkC[2]) != "d") resultValue=checkArray(checkA[0], checkB[1], checkC[2]);
  if(checkArray(checkA[2], checkB[1], checkC[0]) != "d") resultValue=checkArray(checkA[2], checkB[1], checkC[0]);
  
console.log("all is checked, resultValue = " + resultValue);
  
  return resultValue;
}


function checkspace(a, b, c) { //compares spaces to make sure they are the same, found at end of lecture
  return ( (a == b) && (a == c) );
}

function checkRow(row){ //uses the check row example from the video but in its own function to streamline
  let rowValue= "d";
  if( checkspace(row[0], row[1], row[2]) ){
    
    if(row[0] == "x") rowValue= "x";
    
    else rowValue= "o";
  }
  
    return rowValue;
}

function checkArray(value1, value2, value3){ //modified version of the example code that allows different arrays 
  let result= "d";
  if( checkspace(value1, value2, value3) ) {
    
    if(value1[0] == "x") result= "x";
    
    else result= "o";
}
  
    return result;

}


//function that handles clicks
function clickSquare() {

    //check if space is empty
    if (this.innerHTML == "") {

     // set space
     this.innerHTML = currentTurn;

     // update array of rows with the player value
     //update row 1
     if(this.id == "a1") rowA[0] = currentTurn;
     if(this.id == "a2") rowA[1] = currentTurn;
     if(this.id == "a3") rowA[2] = currentTurn;

     //update row 2
     if(this.id == "b1") rowB[0] = currentTurn;
     if(this.id == "b2") rowB[1] = currentTurn;
     if(this.id == "b3") rowB[2] = currentTurn;

     //update row 3
     if(this.id == "c1") rowC[0] = currentTurn;
     if(this.id == "c2") rowC[1] = currentTurn;
     if(this.id == "c3") rowC[2] = currentTurn;

    //updates console log to see wtf is happening
    console.log("Rows: ");
    console.log(rowA);
    console.log(rowB);
    console.log(rowC);

         //switches x and o depending on which turn was last
     if (currentTurn == "x") currentTurn = "o";
     else currentTurn = "x";

          // get a handle on the DOM element to be updated with the outcome
      let gameOutputMsg = document.querySelector("#gameResult span");


      // call your function checkGameboard() with the 3 rows
      let winState = checkGameboard(rowA, rowB, rowC);

      // test the returned value of the function
      if (winState == "x") {
        gameOutputMsg.innerHTML = "X wins";

      } else if (winState == "o") {
        gameOutputMsg.innerHTML = "O wins";

      } else if ( (winState == "d") & (remainingTurns == 0) ) {
        gameOutputMsg.innerHTML = "draw";

      } else {
        gameOutputMsg.innerHTML = "unknown";
      }


        
     // subtract 1 from each turn 
     remainingTurns = remainingTurns--;
     

     //update next player DOM element
     currentPlayer.innerHTML = currentTurn;
    }
  
   
}

//waits for doc to to load to add all clickable events
document.addEventListener("DOMContentLoaded", function(){
    // finds clickable spaces
    let allSpaces = document.querySelectorAll(".square");

    // loops through the clickable spaces
    for (let eachSpace of allSpaces){
       eachSpace.addEventListener("click", clickSquare);
    }

    //Updates current player dom to currentPlayer
    let currentPlayer = document.querySelector("#currentPlayer");
    currentPlayer.innerHTML = currentTurn;
});




