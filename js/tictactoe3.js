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
  var player1;
  var player2;
  var playerMarker;
  var currentPlayer;
  var drawCheck;

  enterNameToStart();

  function enterNameToStart() {
    $("#startgame").click(function() {
      player1 = $("#player1").val();
      player2 = $("#player2").val();
      currentPlayer = whoStarts();
      playerMarker = {
        x: player1 ,
        o: player2};
    });
  };



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


  $(".board").on("click", ".square:not('.square-x, .square-o')", function() {
    var square = $(this).addClass("square-"+currentPlayer);

    var indexOfSquare = $('.board .square').index(square);

    writeToBoard();
    // checkForWinner();





    function writeToBoard() {
      board[indexOfSquare] = currentPlayer;
      console.log(board);
    }

    function checkForWinner() {
      winningCombos.forEach(function(win) {
        if ( board[win[0]] == currentPlayer &&
            board[win[1]] == currentPlayer &&
            board[win[2]] == currentPlayer )
            {
          alert(playerMarker[currentPlayer] + " is the winner!");
          $("#restartgame").show()
          $("#restartgame").click(function() {
            location.reload();
          });
          return true;
        }
      });
      console.log("false");
      return false;
    };

    function alternate() {
      if (currentPlayer === "x"){
        currentPlayer = "o";
      }
      else {
        currentPlayer = "x";
      }
    };

    alternate();
    totalTurns++;

    if (checkForWinner() === false) {
      checkForEndOfGame();
    }

    function checkForEndOfGame() {
      if (totalTurns === 9) {
        alert("Meow!. Play again");
        $("#restartgame").show()
        $("#restartgame").click(function() {
          location.reload();
        });
      }
    }



  });



});
