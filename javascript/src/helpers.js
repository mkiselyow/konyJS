function startLocation() {
  var function_name = prompt('function_name ' +
   '(q - exit, h - help)', 'sortTriangles');

  switch (function_name) {
    case 'makeChessBoard':
      makeChessBoard();
      break;
    case 'analysisOfEnvelopes':
      analysisOfEnvelopes()
      break;
    case 'sortTriangles':
      sortTriangles()
      break;
    case 'findOrReplaceFromUrl':
      findOrReplaceFromUrl()
      break;
    case 'convertNumberToString':
      convertNumberToString()
      break;
    case 'outputNaturalNumbersWhereSqareLowerThen':
      outputNaturalNumbersWhereSqareLowerThen()
      break;
    case 'outputFibonachiInRange':
      outputFibonachiInRange()
      break;
    case 'q':
      break;
    case 'h':
      alert( 'input makeChessBoard to make chess board<br>' +
       'input analysisOfEnvelopes<br>' +
       'input sortTriangles<br>' + 
       'input findOrReplaceFromUrl<br>' +
       'input convertNumberToString<br>' +
       'input outputNaturalNumbersWhereSqareLowerThen<br>' +
       'input outputFibonachiInRange<br>')
      break;
    default:
      alert( 'The ' + function_name + ' function is undefined' );
      break;
  };
}

function validateNumberParams(params) {
  for (var i =  params.length - 1; i >= 0; i--) {
    if (!isNumeric(params[i])) {
      alert( "{status: ‘failed’, reason: ‘ Можно ввести только числовые значения ‘}" )
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