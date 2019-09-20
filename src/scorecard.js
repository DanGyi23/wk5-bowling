Scorecard = function() {
  this._currentscore = 0;
  this.player1 = [];
  this.player2 = [];


  Scorecard.prototype.frameAdd = function(player, score1, score2) {
    if (player == "Player 1") {
      this.player1.push([score1, score2]);
    } else {
      this.player2.push([score1, score2]);
    };
    // need to add logic for spares or strikes 
  };

  Scorecard.prototype.scoreTracker = function(scorekeeper,index) {
    for (i = 0; i < index ; i++) {
      for (j = 0; j < scorekeeper[i].length; j++) {
        this._currentscore += scorekeeper[i][j]
    }
  }
  }


  // Scorecard.prototype.Sum = function(num1, num2) {
  //   num1 + num2
  // }


    // Scorecard.prototype.addScore = function(score1 = 0, score2 = 0) {
  //   if (score1 == 10) {
  //     frameAdd("X")
  //   } else if (score1 + score2 == 10 && score1 < 10 && score2 < 10) {
  //     frameAdd("/")
  //   } else {
  //     frameAdd(score1, score2)
  //   }
  // }

}