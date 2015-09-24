$(document).ready(function() {

  var winningCombos = [
    // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    //vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    //diagonal
      [0, 4, 8],
      [2, 4 ,6]
  ];

  var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var totalTurns = 0;

  var currentPlayer = "x";

//logs the player's square-picks into an array, so that we can use the index of that array
  var chosenSquares = {
    "x": [],
    "o": [],
  }

  $(".board").on("click", ".square:not('.square-x, .square-o')", function() {
    var $square = $(this).addClass("square-"+currentPlayer);

    //used to determine what array position the player's square-pick is by using .index()
    var indexOfSquare = $('.board .square').index($square);
    //taking the current player's choice and logging it into an array
    var currentPlayerSquares = chosenSquares[currentPlayer];

    //takes the current player's chosen square, which has been logged into an array to determine the positiion, which then logs the actual position of the player's chosen square in the game board's array
    currentPlayerSquares.push(indexOfSquare);
    console.log(chosenSquares);
    // chosenSquares.sort();

    var indicies = winningCombos;

    for( i = 0; i < totalTurns+1 ; i++) {
      if
      (board[indicies[i][0]] === board[indicies[i][1]] &&
      board[indicies[i][1]] === board[indicies[i][2]]) {
        console.log("true")
    }
      else {
        console.log("false")
      }
    }

  //   $.each(winningCombos, function(index, combination) {
  //     for( var i = 0; i < currentPlayerSquares.length; i++)
  //     $.each(currentPlayerSquares, function(playerIndex, playerCombo) {
  //       if (currentPlayerSquares === winningCombos) {
  //       console.log("true");
  //     }
  //     else {
  //       console.log("false");
  //     }
  //
  //   });
  // });

      // for (var k in chosenSquares) {
      //   console.log("chosensquare." + k + " = " + chosenSquares[k]);
      //   var pattern = chosenSquares[k];
      //   console.log(pattern);
      //   console.log(pattern.sort());
      //   var sortedPlayerSquares = pattern.sort();
      // }
      //
      // if (sortedPlayerSquares == winningCombos) {
      //   console.log("true");
      // }
      // else {
      //   console.log("false");
      // }

      // winningCombos.forEach(function compareToPlayer(){
      //   if ($.inArray(stringSquare, winningCombos)){
      //     console.log("true");
      //   }
      //   else{
      //     console.log("false");
      //   }
      // });



      //   function comparePlayerForWin() {
      //     for ( var i = 0; i < chosenSquares.length; i++) {
      //         if (stringSquare == winningCombos) {
      //           alert("true");
      //           }
      //         else {
      //           alert("false");
      //         }
      //       }
      // }
      // comparePlayerForWin();
      //
    //alternates between players
    if (currentPlayer === "x"){
      currentPlayer = "o";
    }
    else {
      currentPlayer = "x";
    }

    totalTurns++;

    if (totalTurns === 9 ) {//&& "no one has winningcombo matched") {
      alert("Meow!. Play again");
    }

  });

});
