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

  // var value = {
  //   x: 1,
  //   o: -1,
  // }

  $(".board").on("click", ".square:not('.square-x, .square-o')", function() {
    var square = $(this).addClass("square-"+currentPlayer);
    // currentPlayer.push(board[$(this)]);

    var indexOfSquare = $('.board .square').index(square);

    writeToBoard()

    function writeToBoard() {
      board[indexOfSquare] = currentPlayer;
      console.log(board);
    }

    function checkForWinner() {
      winningCombos.forEach(function(win) {
        if ( board[win[0]] == currentPlayer &&
            board[win[1]] == currentPlayer &&
            board[win[2]] == currentPlayer ) {
          alert(currentPlayer + " is the winner!");
        }
      });
    };

    if (currentPlayer === "x"){
      currentPlayer = "o";
    }
    else {
      currentPlayer = "x";
    }

    totalTurns++;

    if (totalTurns === 9) {//&& "no one has winningcombo matched") {
      alert("Meow!. Play again");
    }

  });

});
