window.onload = function(){
  function startLocation() {
    var function_name = prompt('function_name ' +
     '(q - exit, h - help)', 'makeChessBoard');

    switch (function_name) {
      case 'makeChessBoard':
        makeChessBoard();
        break;
      case 'q':
        break;
      case 'h':
        alert( 'input makeChessBoard to make chess board' )
        break;
      default:
        alert( 'The ' + function_name + ' function is undefined' );
        break;
    };
  }

  function makeChessBoard(height, width) {
    try {

      var height = +prompt('height', 10);
      var width = +prompt('width', 10);

      if (typeof(height) != 'number' || typeof(width) != 'number') {
        alert( "Incorrect height or width input (only digits allowed)" );
        return;
      }

      for (var h = height; h > 0; h--) {
        for (var w = width; w > 0; w--) {
          document.write( (w + h) % 2 ? '\s' : '*' );
        }
        document.write('<br>');
      }

    } catch(err) {
      alert( 'ERROR : ' + err );
    }
  }
  startLocation();
};