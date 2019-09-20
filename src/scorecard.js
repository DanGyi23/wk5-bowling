Scorecard = function() {


  Scorecard.prototype.frameAdd = function (player, score1, score2) {
    if (score1 + score2 != 10) {
      if (player._array.length < 10) {
        player._array.push([score1, score2]);
      }
    };

    if (score1 + score2 == 10 && score1 != 10 && score2 != 10) {
        player._array.push([score1, " /"])
    };

    if (score1 == 10) {
        player._array.push(["X"])
    };
  }

  Scorecard.prototype.scoreTracker = function (player, index) {
    for (i = 0; i < index ; i++) {
      for (j = 0; j < player._array[i].length; j++) {
        if (index == 1) {
          player._currentscore += player._array[i][j]
          return ""
        }

        // strike followed by strike
        // doesn't like the i - 1 property???
        if (player._array[i - 1].includes("X") && player._array[i].includes("X")) {

          player._currentscore += 20
        } 
        // strike followed by spare
        else if (player._array[i - 1].includes("X") && player._array[i].includes(" /")) {
          player._currentscore += 20
        }
        // strike followed by normal
        else if (player._array[i - 1].includes("X") && player._array[i].includes(" /") && player._array[i].includes("X")) {
          player._currentscore + player._array[i][j] * 2
        } 
        // spare followed by strike
        else if (player._array[i - 1].includes(" /") && player._array[i].includes("X")) {
          player._currentscore += 20
        }
        // spare followed by spare
        else if (player._array[i - 1].includes(" /") && player._array[i].includes(" /")) {
          player._currentscore += 20
        }
        // spare followed by normal
        else if (player._array[i - 1].includes(" /") && player._array[i].includes(" /") && player._array[i].includes("X")) {
          player._currentscore + player._array[i][0] * 2
        }
        // normal followed by strike
        else if (player._array[i -1].includes(" /") && player._array[i - 1].includes("X") && player._array[i].includes("X")) {
          player._currentscore += 10
        }
        // normal followed by spare
        else if (player._array[i - 1].includes(" /") && player._array[i - 1].includes("X") && player._array[i].includes("/")) {
          player._currentscore += 10
        }
        // normal followed by normal
        else if (player._array[i - 1].includes(" /") && player._array[i - 1].includes("X") && player._array[i].includes(" /") &&player._array[i].includes("X")) {
          player._currentscore + player._array[i][j]
        }

    }
  }
    return player._currentscore
  }

}