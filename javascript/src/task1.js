function makeChessBoard(height, width) {
  try {
    var height = Math.round(+prompt('height', 10));
    var width = Math.round(+prompt('width', 10));

    if (!isNumeric(height) || !isNumeric(width)) {
      alert( "Incorrect height or width input (only digits allowed)" );
      return;
    }

    for (var h = height; h > 0; h--) {
      for (var w = width; w > 0; w--) {
        document.write( (w + h) % 2 ? '&nbsp;&nbsp;' : '*' );
      }
      document.write('<br>');
    }

  } catch(err) {
    alert( 'ERROR : ' + err );
  }
}