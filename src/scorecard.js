Scorecard = function() {
  this._currentscore = 0;
  this.player1 = [];
  this.player2 = [];


  Scorecard.prototype.frameAdd = function (player, score1, score2) {
    if (score1 + score2 != 10) {
      if (player == "Player 1" && this.player1.length < 10) {
        this.player1.push([score1, score2]);
      } else if (player == "Player 2" && this.player2.length < 10) {
        this.player2.push([score1, score2]);
      }
    };

    if (score1 + score2 == 10 && score1 != 10 && score2 != 10) {
      if (player == "Player 1") {
        this.player1.push([score1, " /"])
      } else {
        this.player2.push([score1, ' /'])
      };
    };

    if (score1 == 10) {
      if (player == "Player 1") {
        this.player1.push(["X"])
      } else {
        this.player2.push(["X"])
      };
    };
  }




  Scorecard.prototype.scoreTracker = function(scorekeeper,index) {
    
    for (i = 0; i < index ; i++) {
      for (j = 0; j < scorekeeper[i].length; j++) {
        // strike followed by strike
        // strike followed by spare
        // strike followed by normal
        // spare followed by strike
        // spare followed by spare
        // spare followed by normal
        // normal followed by strike
        // normal followed by spare
        // normal followed by normal
        if (scorekeeper[i - 1].includes("X") && !scorekeeper[i].includes("X")) {
          this._currentscore += (scorekeeper[i][j]) * 2
        } else if (scorekeeper[i - 1].includes(" /")) {
          this.currentscore += ((scorekeeper[i][0]) + (scorekeeper[i][1]) / 2)
        } else if (scorekeeper[i].includes("X")) {
          this.currentscore += 10
        } else if (sedasa) {
          dasd
        } else {
          this._currentscore += scorekeeper[i][j]
        };    

    }
  }

  }





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