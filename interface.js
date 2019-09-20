$(document).ready(function(){
  var scorecard = new Scorecard;
  var array1 = scorecard.player1
  var array2 = scorecard.player2
  
  frameScoreInsert = function () {
    for (i = 1; i <= 2; i++) {
      if (i == 1) {
        for (j = 1; j <= array1.length; j++) { 
          $('#p' + i.toString() + 'f' + j.toString()).text((array1[j - 1]))
        }
       } else {
        for (k = 1; k <= array2.length; k++) { 
          $('#p' + i.toString() + 'f' + k.toString()).text((array2[k - 1]))
        };
      };
  }
  }

    totalScoreInsert = function() {
      var total1 = 0;
      var total2 = 0;
      for (i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1[i].length; j++) {
          total1 += array1[i][j];
        }
      }
      for (k = 0; k < array2.length; k++) {
        for (var l = 0; l < array2[k].length; l++) {
          total2 += array2[k][l];
        }
      }
      
      $('#p1total').text(total1)
      $('#p2total').text(total2)
      
    }

  $('#score-input').submit(function(event){
    event.preventDefault();
    var player = $('#player-selected').val();
    var score1 = parseInt($('#score1-input').val());
    var score2 = parseInt($('#score2-input').val());
    
    if (score1 + score2 > 10) {
      $('#error-message').text('Maximum score of 10 allowed')
    } else {
      scorecard.frameAdd(player, score1, score2)
      frameScoreInsert();
      totalScoreInsert();
    };
  });
});