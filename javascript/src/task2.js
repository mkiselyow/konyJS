current_envelops = []

function analysisOfEnvelopes(argument) {
  createInputsForEnvelops();
}

function canBePutIntoEachOther() {
  var a = +document.querySelector('#envelop_side_a').value;
  var b = +document.querySelector('#envelop_side_b').value;
  var c = +document.querySelector('#envelop_side_c').value;
  var d = +document.querySelector('#envelop_side_d').value;
  env1_side1 = Math.max(a, b);
  env1_side2 = Math.min(a, b);
  env2_side1 = Math.max(c, d);
  env2_side2 = Math.min(c, d);
  current_envelops.push(new Envelop('Number 1', env1_side1, env1_side2));
  current_envelops.push(new Envelop('Number 2', env2_side1, env2_side2));

  if (comparingProcess(env1_side1, env1_side2, env2_side1, env2_side2)) {
    return current_envelops[1];
  } else if (comparingProcess(env2_side1, env2_side2, env1_side1, env1_side2)) {
    return current_envelops[0];
  } else {
    return false;
  }
}

function compareEnvelopsV(a, b, c, d) {
  if (c > a && b >= (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d + d)) {
    return true;
  }
  return false;
}

function comparingProcess(a, b, c, d) {
  if ((a > c && b > d) || compareEnvelopsV(a, b, c, d)) {
    return true;
  }
  return false;
}

function createInputsForEnvelops() {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').innerHTML = 
    "<div class='row envelops_input'>" +
      "<h3>Input Sizes of Sides of Envelops</h3>" +
      "<div class='col s12'>" +
        "<div class='row'>" +
          "<h5>Envelop A</h5>" +
          "<div class='input-field col s4 offset-s2'>" +
            "<input id='envelop_side_a' type='text' class='validate'>" +
            "<label for='envelop_side_a'>Height</label>" +
          "</div>" +
          "<div class='input-field col s4'>" +
            "<input id='envelop_side_b' type='text' class='validate'>" +
            "<label for='envelop_side_b'>Width</label>" +
          "</div>" +
        "</div>" +
        "<hr>" +
        "<div class='row'>" +
          "<h5>Envelop B</h5>" +
          "<div class='input-field col s4 offset-s2'>" +
            "<input id='envelop_side_c' type='text' class='validate'>" +
            "<label for='envelop_side_c'>Symbol</label>" +
          "</div>" +
          "<div class='input-field col s4'>" +
            "<input id='envelop_side_d' type='text' class='validate'>" +
            "<label for='envelop_side_d'>Symbol</label>" +
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
  button.addEventListener('click', submitEnvelopsInput);

  user_inputs = document.querySelectorAll('input');
  user_inputs.forEach(function(el){
    el.addEventListener('change', validateEnvelopsInputs.bind(el));
  });
  return 'form created';
}

function submitEnvelopsInput(argument) {
  if (validateEnvelopsInputs()) {
    outputResultsEnvelops();

    hidePreviousContent.call('.envelops_input');
  }
  return false;
}

function validateEnvelopsInputs() {
  var a = +document.querySelector('#envelop_side_a').value;
  var b = +document.querySelector('#envelop_side_b').value;
  var c = +document.querySelector('#envelop_side_c').value;
  var d = +document.querySelector('#envelop_side_d').value;

  if (this == window) {
    [a, b, c, d].forEach(function(param){
      if (isNaN(param) || param == 0) {
        M.toast({html: 'Input Only Numbers'});
        return false;
      }
    });
    return true;
  } else if (this.id) {
    current_value = +document.querySelector('#' + this.id).value

    if (isNaN(current_value) || current_value == 0) {
      M.toast({html: 'Input Only Numbers'});
      return false;
    }
    return true;
  }
}

function outputResultsEnvelops() {
  result = canBePutIntoEachOther();

  if (result) {
    document.querySelector('#content').innerHTML += "<ul" + 
      " class='collection with-header'>" +
      "<li class='collection-header'><h4>Envelops Can Be Put Into Each Other</h4></li>" +
      "<li class='collection-item'>" + `${result}` + " can be put inside.</li>" +
      "</ul>";
  } else {
    document.querySelector('#content').innerHTML += "<ul" + 
      " class='collection with-header'>" +
      "<li class='collection-header'><h4>Envelops Can`t Be Put Into Each Other</h4></li>" + 
      "<li class='collection-item'>" + `${Number(result)}` + "</li>" + 
      "</ul>";
  };

  document.querySelector('#content').innerHTML += "<a class='waves-effect waves-light btn-large try_again'>Want To Try Again ?</a>";

  document.querySelector('.try_again').addEventListener('click', analysisOfEnvelopes)

  return result;
}

function Envelop(number, side1, side2) {
  this.number = number;
  this.side1 = side1;
  this.side2 = side2;
  this.toString = function() {
    return this.number;
  };
}