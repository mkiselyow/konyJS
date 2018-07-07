///<reference path="../javascript/main.js"></script>
///<reference path="../javascript/src/helpers.js"></script>
///<reference path="../javascript/src/task1.js"></script>
///<reference path="../javascript/src/task2.js"></script>
///<reference path="../javascript/src/task3.js"></script>

describe("main.js", function() {

  beforeEach(function() {
    spyOn(window, 'onload');
    spyOn(window, 'Triangle');
    spyOn(window, 'startLocation');
  });

  it("window.onload should call startLocation func", function() {
    // window.onload();
    expect(window.onload).toHaveBeenCalled();
    expect(startLocation).toHaveBeenCalled();
  });

  it("should have content", function() {
    // jasmine.getFixtures().fixturesPath = 'kony/index.html'
    expect($('body')).toHaveText('hi');
  });

  it("should have Triangle Function", function() {
    window.Triangle('name', 1, 1, 1);
    expect(window.Triangle).toHaveBeenCalled();
  });
});