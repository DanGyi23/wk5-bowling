Scorecard = function () {


  Scorecard.prototype.frameAdd = function (player, score1, score2) {
    if (player._array.length < 9) {
      if (score1 + score2 != 10) {
        player._array.push([score1, score2]);
      }


      if (score1 + score2 == 10 && score1 != 10) {
        player._array.push([score1, " /"])
      };

      if (score1 == 10) {
        player._array.push(["X"])
      };
    };
  }

  Scorecard.prototype.scoreTracker = function (player, i) {
    if (i == 1) {
      if (player._array[i - 1].includes("X") || player._array[i - 1].includes(" /")) {
        player._currentscore += 10
      } else {
        player._currentscore += player._array[i - 1][0]
        player._currentscore += player._array[i - 1][1]
      };
      return player._currentscore
    };

    if (i >= 2 && i <= 9) {
      for (j = 0; j < player._array[i - 1].length; j++) {
        // strike followed by strike followed by strike
        if (i > 2 && player._array[(i - 3)].includes("X") && (player._array[(i - 2)].includes("X")) && (player._array[(i - 1)].includes("X"))) {
          player._currentscore += 30
        // strike followed by strike
        } else if (player._array[(i - 2)].includes("X") && player._array[i - 1].includes("X")) {
          player._currentscore += 20
        }
        // strike followed by spare
        else if (player._array[i - 2].includes("X") && player._array[i - 1].includes(" /")) {
          player._currentscore += 20
        }
        // strike followed by normal
        else if (player._array[i - 2].includes("X") && !player._array[i - 1].includes(" /") && !player._array[i - 1].includes("X")) {
          player._currentscore += player._array[i - 1][j] * 2
        }
        // spare followed by strike
        else if (player._array[i - 2].includes(" /") && player._array[i - 1].includes("X")) {
          player._currentscore += 20
        }
        // spare followed by spare
        else if (player._array[i - 2].includes(" /") && player._array[i - 1].includes(" /")) {
          player._currentscore += 20
        }
        // spare followed by normal
        else if (player._array[i - 2].includes(" /") && !player._array[i - 1].includes(" /") && !player._array[i - 1].includes("X")) {
          player._currentscore += player._array[i - 1][0]
          player._currentscore += player._array[i - 1][1] / 2
        }
        // normal followed by strike
        else if (!player._array[i - 2].includes(" /") && !player._array[i - 2].includes("X") && player._array[i - 1].includes("X")) {
          player._currentscore += 10
        }
        // normal followed by spare
        else if (!player._array[i - 2].includes(" /") && !player._array[i - 2].includes("X") && player._array[i - 1].includes("/")) {
          player._currentscore += 10
        }
        // normal followed by normal
        else if (!player._array[i - 2].includes(" /") && !player._array[i - 2].includes("X") && !player._array[i - 1].includes(" /") && !player._array[i - 1].includes("X")) {
          player._currentscore += player._array[i - 1][j]
        }

      }
    }
    return player._currentscore
  }

  Scorecard.prototype.frameTenAdd = function(player, score1, score2, score3) {
    if (player._array.length == 9) {
      if (score1 + score2 < 10) {
        player._array.push([score1, score2]);
      }

      if (score1 + score2 == 10 && score1 != 10) {
        player._array.push([score1, " /", score3])
      };

      if (score1 == 10) {
        if (score2 + score3 == 10) {
          player._array.push(["X", score2, " /"])
        } else if (score2 == 10 && score3 != 10) {
          player._array.push(["X", "X", score3])
        } else if (score2 == 10 && score3 == 10) {
          player._array.push(["X", "X", "X"])
        };
      };

    };
  }

  Scorecard.prototype.frameTenCalc = function(player, i) {
    if (i == 10) {
      if (player._array[(i - 3)].includes("X") && player._array[i - 2].includes("X")) {
    // st st
    
    // normal (score 1x3 + score 2x2)
    // spare then normal (20 + score1 + score3)
    // spare then strike (30 + score 2)
    // strike then normal (30 + 2x score 2 + score 3)
    // strike then spare (40 + score 2)
    // strike strike normal (50 + normal)
    // strike strike strike (60)
      } else if (player._array[(i - 3)].includes("X") && player._array[i - 2].includes(" /")) {
        // st sp
      } else if (!player._array[(i - 3)].includes("X") && player._array[i - 2].includes("X")) {
        //norm st
        //sp st
      } else if (player._array[(i - 2)].includes(" /") || (player._array[(i - 3)].includes("X") && !player._array[i - 2].includes(" /") && !player._array[i - 2].includes("X"))) {
        // norm sp
        // sp sp
        // st norm
      } else if (!player._array[(i - 3)].includes(" /") && !player._array[(i - 3)].includes("X") && player._array[i - 2].includes(" /") && player._array[i - 2].includes("X")) {
        //norm norm
      }
    }

  }

}