describe("main.js", function() {

  beforeEach(function() {
    spyOn(window, 'prompt').and.returnValue("outputFibonachiInRange");
  });

  it("should be raise prompt on start", function() {
    window.onload = function(){
      startLocation();
    };
    expect(window.prompt).toHaveBeenCalledWith('function_name ' +
     '(q - exit, h - help)', 'outputFibonachiInRange');
  });

  it("should have content", function() {
    expect($('body')).toHaveText('hi');
  });
});