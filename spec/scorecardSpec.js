describe('Scorecard', function(){
  var scorecard = new Scorecard;

  describe 
  it('lets you enter a score to each frame', function(){
    scorecard.addScore(8,1)
    expect(scorecard._currentscore).toEqual(9)
  })

  it('adds completed frame array to an array', function(){
    scorecard.addScore(7)
    scorecard.addScore(2)
    scorecard.addScore(4)
    expect(scorecard._scorekeeper[0].length).toEqual(2)
  })
})