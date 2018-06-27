window.onload = function(){
  function startLocation() {
    var function_name = prompt('function_name ' +
     '(q - exit, h - help)', 'outputFibonachiInRange');

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
    if (!validateNumberParams(params)) return;
    this.triangle_p = +(1 / 2 * (this.side1 + this.side2 + this.side3)).toFixed(2);
    this.triangle_v1 = this.triangle_p * (this.triangle_p - this.side1) *
     (this.triangle_p - this.side2) * (this.triangle_p - this.side3);
    this.triangle_v = +(Math.sqrt(this.triangle_v1).toFixed(2));
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

  function findOrReplaceFromUrl() {
    this.input = prompt('Url to parse, string to find', 
      'https://learn.javascript.ru/ajax-xmlhttprequest, string_to_find');
    this.url = input.split(', ')[0]
    this.url_text = getUrlText(url)
    this.string_to_find = input.split(', ')[1]
     if (input.split(', ')[2]) {
      this.string_to_replace = input.split(', ')[2]
      this.url_text.replace(this.string_to_find, this.string_to_replace)
    } else {
      searchStrPositions(url_text, string_to_find);
    }

  }

  // url = 'https://learn.javascript.ru/ajax-xmlhttprequest'

  function getUrlText(url) {
    var xhr = new XMLHttpRequest(); //вопрос по CORS и какой метод использовать для решения
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText );
    }
    return xhr.response.match(/<body[a-zA-Z0-9|\s]*<\/body>/); //вопрос по RegEx
  }

  // getUrlText(url);

  function searchStrPositions(url_text, string_to_find) {
    var pos = 0;
    var total_positions = []
    while (true) {
      var find_in_position = string_to_find.indexOf(url_text, pos);
      if (find_in_position == -1) break;

      total_positions.push(find_in_position);
      pos = find_in_position + 1;
    }
    return total_positions.length;
  }

  function convertNumberToString() {
    var num = +prompt("Введите число от 1 до 99");
    if ((isNaN(num)) || (num < 1) || (num > 99) || (parseInt(num) != num)) {
      alert("Введено неправильное число!"); 
    } else { 
      var q = conversionNumberToString(num);
      alert('Пользователь ввёл: ' + num + " - " + q + ' ');
    }
  }
    
  function conversionNumberToString(num) {
    var b = num % 10
    var a = (num - b) / 10,
    A1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    A2 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
           'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    A3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
          'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    if (num > 1 && num < 10) return A1[num - 1]
    if (num > 10 && num < 20) return A2[num - 11];
    if (b == 0) return A3[a - 1];
    return A3[a - 1] + ' ' + A1[b - 1];         
  }

  function outputNaturalNumbersWhereSqareLowerThen() {
    var number = Math.round(+prompt('number', 10));
    var params = [];
    params.push(number);
    if (!validateNumberParams(params)) return;
    for (var i = 1; number > (i * i); i++) {
      console.log(i);
    }
  }

  function outputFibonachiInRange() {
    var start_range = Math.round(+prompt('start range', 10));
    var end_range = Math.round(+prompt('end range', 100));
    var params = [start_range, end_range];
    if (!validateNumberParams(params)) return;
    for (var i = start_range; (i + i - 1) < end_range; i = (i + i - 1)) {
      console.log(i + i - 1);
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