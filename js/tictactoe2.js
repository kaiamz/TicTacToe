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
  // var randomize = Math.floor((Math.random() * 2) + 1);
  // var player1 = $("#player1").;
  // var player2 = $("#player2").val();
  // var currentPlayer
  var player1;
  var player2;
  var playerMarker = {
    x: player1 ,
    o: player2};
  var currentPlayer;

  enterNameToStart();

  function enterNameToStart() {
    $("#startgame").click(function(event) {
      event.preventDefault();
      player1 = $("#player1").val();
      player2 = $("#player2").val();
      currentPlayer = whoStarts();
      gameStarts();
    });
  };

  //randomizes who starts the game
  function whoStarts() {
    var randomize = Math.floor((Math.random() * 2) + 1);

    if (randomize === 1) {
      alert(player1 + " starts");
      return "x";
    }
    else {
      alert(player2 + " starts");
      return "o";
    }
  }

  function gameStarts() {

    $(".board").on("click", ".square:not('.square-x, .square-o')", function() {
      var square = $(this).addClass("square-"+currentPlayer);

      var indexOfSquare = $('.board .square').index(square);

      writeToBoard();
      checkForWinner();
      alternate();
      totalTurns++;
      catsGame();

      //writes the player's marker to the board
      function writeToBoard() {
        board[indexOfSquare] = currentPlayer;
        console.log(board);
      }

      //takes the player's markers on the board and compares to each of the winning combinations and if the player's markers matches with one of the combinations, they win
      function checkForWinner() {
        winningCombos.forEach(function(win) {
          if ( board[win[0]] == currentPlayer &&
              board[win[1]] == currentPlayer &&
              board[win[2]] == currentPlayer ) {
            alert(playerMarker[currentPlayer] + " is the winner!");
            return true;
          }
          else {
            return false;
          }
        });
      };

      //alternates between players
      function alternate() {
        if (currentPlayer === "x"){
          currentPlayer = "o";
        }
        else {
          currentPlayer = "x";
        }
      };

      //turns counter
      // totalTurns++;

      //cat's game
      function catsGame() {
        if (totalTurns === 9 && checkForWinner() === false ) {
          alert("Meow!. Play again");
        }
      }

    });
  };

});
