$(document).ready(function(){
  scorecard = new Scorecard;
  player1 = new Player;
  player2 = new Player;

  
  frameScoreInsert = function () {
    for (i = 1; i <= 2; i++) {
      if (i == 1) {
        for (j = 1; j <= player1._array.length; j++) { 
          $('#p' + i.toString() + 'f' + j.toString()).text((player1._array[j - 1]))
        }
       } else {
        for (k = 1; k <= player2._array.length; k++) { 
          $('#p' + i.toString() + 'f' + k.toString()).text((player2._array[k - 1]))
        };
      };
  }

  // need to remove the / and X from this method
  }

    totalScoreInsert = function() {
      var total1 = 0;
      var total2 = 0;
      for (i = 0; i < player1._array.length; i++) {
        for (var j = 0; j < player1._array[i].length; j++) {
          total1 += player1._array[i][j];
        }
      }
      for (k = 0; k < player2._array.length; k++) {
        for (var l = 0; l < player2._array[k].length; l++) {
          total2 += player2._array[k][l];
        }
      }

      // can look to call the cumulative scorer here and delete function
      
      
      
    }

  $('#score-input').submit(function(event){
    event.preventDefault();
    var player = $('#player-selected').val();
    var score1 = parseInt($('#score1-input').val());
    var score2 = parseInt($('#score2-input').val());
    
    if (score1 + score2 > 10) {
      $('#error-message').text('Maximum score of 10 allowed')
    } else {
      if (player == "Player 1") {
        scorecard.frameAdd(player1, score1, score2)
        frameScoreInsert();
        var total1 = scorecard.scoreTracker(player1, player1._array.length)
        $('#p1total').text(total1)
      } else {
        scorecard.frameAdd(player2, score1, score2)
        frameScoreInsert();
        var total2 = scorecard.scoreTracker(player2, player2._array.length)
        $('#p2total').text(total2)
      };
      
    };
  });
});