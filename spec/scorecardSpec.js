describe('Scorecard', function(){
  var scorecard = new Scorecard;
  it('lets you enter a score to each frame', function(){
    scorecard.addScore(8)
    expect(scorecard._currentscore).toEqual(8)
  })
})