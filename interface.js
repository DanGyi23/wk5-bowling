$(document).ready(function(){
  var scorecard = new Scorecard;
  var array1 = scorecard.player1
  var array2 = scorecard.player2
  
  scoreInsert = function () {
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

  $('#score-input').submit(function(event){
    event.preventDefault();
    var player = $('#player-selected').val();
    var score1 = $('#score1-input').val();
    var score2 = $('#score2-input').val();

    scorecard.frameAdd(player, score1, score2)
    
    scoreInsert();

  });
});