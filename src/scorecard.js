Scorecard = function() {
  this._currentscore = 0;
  Scorecard.prototype.addScore = function(score = 0) {
    this._currentscore += score
  }

}