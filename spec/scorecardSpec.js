describe('Scorecard', function(){

  beforeEach(function () {
    scorecard = new Scorecard;
    player = new Player;
  });

  describe 
  it('lets you enter a score to each frame', function(){
    scorecard.frameAdd(player, 3, 4)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._currentscore).toEqual(7)
  })

  it('adds completed frame array to an array', function(){
    scorecard.frameAdd(player, 10, 0)
    scorecard.scoreTracker(player, player._array.length)
    scorecard.frameAdd(player, 4, 7)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._array.length).toEqual(2)
  })

  it('adds strike as 10 points in frame 1', function () {
    scorecard.frameAdd(player, 10, 0)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._currentscore).toEqual(10)
  })

  it('doubles the next two rolls after a strike', function () {
    scorecard.frameAdd(player, 10, 0)
    scorecard.scoreTracker(player, player._array.length)
    scorecard.frameAdd(player, 2, 4)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._currentscore).toEqual(22)
  })

  it('adds 10 points for a spare', function () {
    scorecard.frameAdd(player, 4, 6)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._currentscore).toEqual(10)
  })

  it('doubles next one roll after a spare', function () {
    scorecard.frameAdd(player, 4, 6)
    scorecard.scoreTracker(player, player._array.length)
    scorecard.frameAdd(player, 2, 5)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._currentscore).toEqual(19)
  })

  it('adds two consecutive non-strike/non-spare frames normally', function() {
    scorecard.frameAdd(player, 4, 2)
    scorecard.scoreTracker(player, player._array.length)
    scorecard.frameAdd(player, 9, 0)
    scorecard.scoreTracker(player, player._array.length)
    expect(player._currentscore).toEqual(15)
  })
})