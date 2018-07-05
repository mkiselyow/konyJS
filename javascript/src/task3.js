var arr_of_triangles = [];

function sortTriangles() {
  createInputsForTriangle();

  arr_of_triangles.sort(compareTriangleV);

  return arr_of_triangles;
}

function Triangle(name, side1, side2, side3) {
  this.name = name;
  this.side1 = +side1;
  this.side2 = +side2;
  this.side3 = +side3;

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

function createInputsForTriangle() {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').innerHTML = 
    "<div class='row triangle_inputs'>" +
      "<h3>Input Triangle Sides</h3>" +
      "<div class='col s12'>" +
        "<div class='row'>" +
          "<div class='input-field col s6'>" +
            "<input id='triangle_name' type='text' class='validate'>" +
            "<label for='triangle_name'>Triangle name</label>" +
          "</div>" +
          "<div class='input-field col s6'>" +
            "<input id='triangle_side1' type='text' class='validate'>" +
            "<label for='triangle_side1'>Triangle side 1</label>" +
          "</div>" +
          "<div class='input-field col s6'>" +
            "<input id='triangle_side2' type='text' class='validate'>" +
            "<label for='triangle_side2'>Triangle side 2</label>" +
          "</div>" +
          "<div class='input-field col s6'>" +
            "<input id='triangle_side3' type='text' class='validate'>" +
            "<label for='triangle_side3'>Triangle side 3</label>" +
          "</div>" +
        "</div>" +
        "<button class='btn waves-effect waves-light' type='submit' name='action' id='submit_button'>" +
          "Submit" +
          "<i class='material-icons right'>send</i>"
        "</button>" +
      "</div>" +
    "</div>";

  button = document.querySelector('#submit_button');
  button.addEventListener('click', submitTriangleForm)
}

function submitTriangleForm() {
  var name =  document.querySelector('#triangle_name').value;
  var side1 = document.querySelector('#triangle_side1').value;
  var side2 = document.querySelector('#triangle_side2').value;
  var side3 = document.querySelector('#triangle_side3').value;

  triangle = new Triangle(name, side1, side2, side3);

  arr_of_triangles.push(triangle);

  if (wantToContinue()) {
    sortTriangles();
  } else {
    returnResults();
    arr_of_triangles = [];
  };
}

function returnResults() {
  function hidePreviousContent() {
    document.querySelector('.triangle_inputs').innerHTML = '';
  };

  hidePreviousContent();

  function outputResultsSlowly() {
    for (var i = arr_of_triangles.length - 1; i >= 0; i--) {
      if (i == (arr_of_triangles.length - 1)) {
        document.querySelector('#content').innerHTML += "<ul" + 
          " class='collection with-header'>" +
          "<li class='collection-header'><h4>Sorted Triangles</h4></li>";
      };

      document.querySelector('#content').innerHTML += "<li" +
        " class='collection-item' id='triangle" + i +
        "' style='display:none;'>" + "[" + arr_of_triangles[i].name +
        "]: " + arr_of_triangles[i].triangle_v + " cm </li>";

      if (i == 0) {
        document.querySelector('#content').innerHTML += "</ul>";
      };

      setTimeout(outputSingleResult.bind(i), (1000 * i));
    };
  };

  function outputSingleResult() {
    $('#triangle' + this).toggle(2000);
  }

  outputResultsSlowly();
  console.log(arr_of_triangles);
  return arr_of_triangles;
}

// вопросы : в блоке часть кода выполняется раньше
// вопросы : в каком контексте будет выполнен button.addEventListener('click', submitTriangleForm)
// вопросы : последняя фигура выходит первой