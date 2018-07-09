function startLocation() {
  loadStartButtons();
  button_selectors =[
    ['#task1', makeChessBoard], 
    ['#task2', analysisOfEnvelopes], 
    ['#task3', sortTriangles], 
    ['#task4', isPalindromeOf], 
    ['#task5', areHappyTickets],
    ['#task6', outputNaturalNumbersWhereSqareLowerThen], 
    ['#task7', outputFibonachiInRange]];

  button_selectors.forEach(function(el){
    document.querySelector(el[0]).addEventListener('click', el[1]);
  });
}

function validateNumberParams(params) {
  for (var i =  params.length - 1; i >= 0; i--) {
    if (!isNumeric(params[i])) {
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
      "<div class='row'>" +
        "<div class='starting_buttons col s4 offset-s4'>" +
          "<a class='waves-effect waves-light btn-large' id='task1'>Chess Board</a>" +
          "<a class='waves-effect waves-light btn-large' id='task2'>Analysis Of Envelopes</a>" +
          "<a class='waves-effect waves-light btn-large' id='task3'>Sort Triangles</a>" +
          "<a class='waves-effect waves-light btn-large' id='task4'>Palindrome</a>" +
          "<a class='waves-effect waves-light btn-large' id='task5'>Happy tickets</a>" +
          "<a class='waves-effect waves-light btn-large' id='task6'>Task 6</a>" +
          "<a class='waves-effect waves-light btn-large' id='task7'>Task 7</a>" +
        "</div>" +
      "</div>" +
    "</div>";

  document.body.insertAdjacentHTML('afterbegin', start_buttons);
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function hidePreviousContent() {
  document.querySelector(this).innerHTML = '';
};