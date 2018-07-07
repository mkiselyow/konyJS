function startLocation() {
  loadStartButtons();
  button_selectors =[
    ['#task1', makeChessBoard], 
    ['#task2', analysisOfEnvelopes], 
    ['#task3', sortTriangles], 
    ['#task3', sortTriangles], 
    ['#task3', sortTriangles],
    ['#task6', outputNaturalNumbersWhereSqareLowerThen], 
    ['#task7', outputFibonachiInRange]];

  button_selectors.forEach(function(el){
    document.querySelector(el[0]).addEventListener('click', el[1]);
  });
}

function validateNumberParams(params) {
  for (var i =  params.length - 1; i >= 0; i--) {
    if (!isNumeric(params[i])) {
      alert( params[i] );
      alert( params );
      alert( "{status: ‘failed’, reason: ‘ Можно ввести только числовые значения ‘}" );
      return false;
    }
    return true;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function wantToContinue() {
  var answer = prompt('Do you want to continue?(yes/no)', 'yes');
  if (!( typeof(answer) == 'string' && (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'))) {
    return false;
  }
  return true;
}

function loadStartButtons() {
  var start_buttons = "hi" +
    "<div id='content' class='container'>" +
      "<a class='waves-effect waves-light btn-large' id='task1'>Task 1</a>" +
      "<a class='waves-effect waves-light btn-large' id='task2'>Task 2</a>" +
      "<a class='waves-effect waves-light btn-large' id='task3'>Sort Triangles</a>" +
      "<a class='waves-effect waves-light btn-large' id='task3'>Task 4</a>" +
      "<a class='waves-effect waves-light btn-large' id='task3'>Task 5</a>" +
      "<a class='waves-effect waves-light btn-large' id='task6'>Task 6</a>" +
      "<a class='waves-effect waves-light btn-large' id='task7'>Task 7</a>" +
    "</div>";

  document.body.insertAdjacentHTML('afterbegin', start_buttons);
}