function makeChessBoard() {
  createInputsForChessBoard();
}

function generateBoard() {
  var height = Math.round(+document.querySelector('#height_input').value);
  var width  = Math.round(+document.querySelector('#width_input').value);
  var symbol  = String(document.querySelector('#symbol_input').value);
  var str = '';

  for (var h = height; h > 0; h--) {
    for (var w = width; w > 0; w--) {
      str += ( (w + h) % 2 ? '&nbsp;&nbsp;&nbsp;' : symbol );
    }
    str += '<br>';
  }

  document.querySelector('#content').innerHTML += "" +
    "<h4 class='center-align'>Chess Board</h4>" +
    "<div class='chessboard_container center-align'></div>"
  document.querySelector('.chessboard_container').innerHTML = str;
  document.querySelector('.chessboard_container').style =(
    'display: none;' +
    'word-spacing: 0px;'+
    'letter-spacing: 0px;'+
    'line-height: 11px;'
  );

  $('.chessboard_container').toggle(2000);

  return true;
}

function createInputsForChessBoard() {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').innerHTML = 
    "<div class='row chessboard_input'>" +
      "<h3>Input Height, Width and Symbol of Chess Board</h3>" +
      "<div class='col s12'>" +
        "<div class='row'>" +
          "<div class='input-field col s4 offset-s2'>" +
            "<input id='height_input' type='text' class='validate'>" +
            "<label for='height_input'>Height</label>" +
          "</div>" +
          "<div class='input-field col s4'>" +
            "<input id='width_input' type='text' class='validate'>" +
            "<label for='width_input'>Width</label>" +
          "</div>" +
        "</div>" +
        "<div class='row'>" +
          "<div class='input-field col s4 offset-s4'>" +
            "<input id='symbol_input' type='text' class='validate'>" +
            "<label for='symbol_input'>Symbol</label>(recomended: &#9632;)" +
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
  button.addEventListener('click', submitChessBoardInput);

  user_inputs = document.querySelectorAll('input');
  user_inputs.forEach(function(el){
    el.addEventListener('change', validateChessBoardInputs.bind(el));
  });
  return 'form created';
}

function submitChessBoardInput() {
  if (validateChessBoardInputs()) {
    generateBoard();

    hidePreviousContent.call('.chessboard_input');
  }
  return false;
}

function validateChessBoardInputs(argument) {
  var height = Math.round(+document.querySelector('#height_input').value);
  var width  = Math.round(+document.querySelector('#width_input').value);
  var symbol = String(document.querySelector('#symbol_input').value);

  if (symbol == '') {
    M.toast({html: 'Input Symbol'});
    return false;
  }

  if (isNaN(height) || isNaN(width) || height == 0 || width == 0 ) {
    M.toast({html: 'Input Only Numbers'});
    return false;
  }
  return true;
}