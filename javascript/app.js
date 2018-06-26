window.onload = function(){
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
      case 'q':
        break;
      case 'h':
        alert( 'input makeChessBoard to make chess board<br>' +
         'input analysisOfEnvelopes<br>' +
         'input sortTriangles')
        break;
      default:
        alert( 'The ' + function_name + ' function is undefined' );
        break;
    };
  }

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

  function analysisOfEnvelopes(argument) {
    while (true) {
      try {
        var a = +prompt('envelop1: side: a', 11);
        var b = +prompt('envelop1: side: b', 12);
        var c = +prompt('envelop2: side: c', 10);
        var d = +prompt('envelop2: side: d', 9);

        var params = [a, b, c, d];

        if (!validateNumberParams(params)) {
          if (!wantToContinue()) return;
        }

        if (Math.max(a, b) > Math.max(c, d) && Math.min(a, b) > Math.min(c, d)) {
          alert( 'you can put envelop(sides: a, b) in  envelop(sides: c, d)' )
          if (!wantToContinue()) return;
        }
        alert( 'you can\'t put envelop(sides: a, b) in  envelop(sides: c, d)' )
      } catch(err) {
        alert( 'ERROR : ' + err );
      }
    }
  }

  function sortTriangles() {
    while (true) {
      try {
        var arr_of_triangles = []
        while (true) {
          var triangle = new Triangle();
          arr_of_triangles.push(triangle);
          if (!wantToContinue()) return;
        }
      } catch(err) {
        alert('ERROR : ' + err)
      } finally {
        arr_of_triangles.sort(compareTriangleV);
        for (var i = arr_of_triangles.length - 1; i >= 0; i--) {
          alert( '[' +arr_of_triangles[i].name +
           ']: ' + arr_of_triangles[i].triangle_v + ' cm');
        }
      }
    }
  }

  function validateNumberParams(params) {
    for (var i =  params.length - 1; i >= 0; i--) {
      if (!isNumeric(params[i])) {
        alert( params[i] + ' is not correct' )
        return false;
      }
      return true;
    }
  }

  function Triangle() {
    this.name = prompt('Triangle name', 'Triangle #0');
    this.side1 = +prompt('Triangle side1', 3);
    this.side2 = +prompt('Triangle side2', 3);
    this.side3 = +prompt('Triangle side3', 3);
    params = [this.side1, this.side2, this.side3];
    // if (!validateNumberParams(params)) return;
    this.triangle_p = +(1 / 2 * (this.side1 + this.side2 + this.side3)).toFixed(2);
    this.triangle_v1 = this.triangle_p * (this.triangle_p - this.side1) * (this.triangle_p - this.side2) * (this.triangle_p - this.side3)
    this.triangle_v = +(Math.sqrt(x).toFixed(2);
    alert( this.triangle_v );
  }

  function compareTriangleV(triangleA, triangleB) {
    return triangleA.triangle_v - triangleB.triangle_v;
  }

  function wrapFunction(function_name) {
    while (true) {
      try {
        function_name
      } catch(err) {
        alert( 'ERROR : ' + err );
      }
    }
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function wantToContinue() {
    var answer = prompt('Do you want to continue?(yes/no)', 'yes');
    if (!(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y')) {
      return false;
    }
    return true;
  }

  startLocation();
};