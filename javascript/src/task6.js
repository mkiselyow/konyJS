function outputNaturalNumbers() {
  createInputsForNumbers();
}

function outputNaturalNumbersWhereSqareHigherThen(m, n) {
  var m = m;
  var n = n;
  var number = Math.ceil(Math.sqrt(m));
  var result_str = '';

  for (var i = n; i > 0; i--) {
    result_str += number + ' ';
    number++;
  }
  return result_str;
}

function createInputsForNumbers() {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').innerHTML = 
    "<div class='row envelops_input'>" +
      "<h3>Input Params</h3>" +
      "<div class='col s12'>" +
        "<div class='row'>" +
          "<div class='input-field col s4 offset-s2'>" +
            "<input id='input_m' type='text' class='validate'>" +
            "<label for='input_m'>Number*Number would be higher then M</label>" +
          "</div>" +
          "<div class='input-field col s4'>" +
            "<input id='input_n' type='text' class='validate'>" +
            "<label for='input_n'>Quantity of Numbers</label>" +
          "</div>" +
        "</div>" +
        "<div class='row'>" +
          "<div class='col s4 offset-s4'>" +
            "<button class='btn waves-effect waves-light' type='submit' name='action' id='submit_button'>" +
              "Submit" +
              "<i class='material-icons right'>send</i>"
            "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>";

  button = document.querySelector('#submit_button');
  button.addEventListener('click', submitNaturalNumbersInput);

  user_inputs = document.querySelectorAll('input');
  user_inputs.forEach(function(el){
    el.addEventListener('change', validateNaturalNumbersInputs.bind(el));
  });
  return 'form created';
}

function submitNaturalNumbersInput() {
  if (validateNaturalNumbersInputs()) {
    outputResultsNaturalNumbers();

    hidePreviousContent.call('.envelops_input');
  }
  return false;
}

function validateNaturalNumbersInputs() {
  if (isNaN(+document.querySelector('#input_m').value)) {
    M.toast({html: 'M: Only Numbers'});
    return false;
  } else if (isNaN(+document.querySelector('#input_n').value)) {
    M.toast({html: 'N: Only Numbers'});
    return false;
  }
  return true;
}

function outputResultsNaturalNumbers() {
  var m = +document.querySelector('#input_m').value;
  var n = +document.querySelector('#input_n').value;
  var result = outputNaturalNumbersWhereSqareHigherThen(m, n);

  document.querySelector('#content').innerHTML += "<ul" + 
    " class='collection with-header'>" +
    "<li class='collection-header'><h4>Natural Numbers String</h4></li>" +
    "<li class='collection-item'>" + `${result}` + "</li>" +
    "</ul>";
  return result;
}