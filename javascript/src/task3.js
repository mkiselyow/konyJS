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

  this.triangle_p = countTriangle_P(this.side1, this.side2, this.side3);
  this.triangle_v = countTriangle_V(this.side1, this.side2, this.side3, this.triangle_p);
  return this;
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
  button.addEventListener('click', submitTriangleForm);

  user_inputs = document.querySelectorAll('input');
  user_inputs.forEach(function(el){
    console.log(el);
    el.addEventListener('change', validateSidesOfTriangle.bind(el));
  });
  return 'form created';
}

function submitTriangleForm() {
  var name =  document.querySelector('#triangle_name').value;
  var side1 = document.querySelector('#triangle_side1').value;
  var side2 = document.querySelector('#triangle_side2').value;
  var side3 = document.querySelector('#triangle_side3').value;

  params = [side1, side2, side3];
  valid = validateNumberParams(params);
  if (!valid) return;

  triangle = new Triangle(name, side1, side2, side3);

  arr_of_triangles.push(triangle);

  if (wantToContinue()) {
    sortTriangles();
  } else {
    returnResults();
    arr_of_triangles = [];
  };
  return arr_of_triangles;
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
          "<li class='collection-header'><h4>Sorted Triangles</h4></li></ul>";
      };

      document.querySelector('#content').innerHTML +=  "<ul" + 
          " class='collection with-header'>" + "<li" +
        " class='collection-item' id='triangle" + i +
        "' style='display:none;'>" + "[" + arr_of_triangles[i].name +
        "]: " + arr_of_triangles[i].triangle_v + " cm </li></ul>";

      setTimeout(outputSingleResult.bind(i), (1000 * i));
    };
    return arr_of_triangles;
  };

  function outputSingleResult() {
    $('#triangle' + this).toggle(2000);
  }

  outputResultsSlowly();
  console.log(arr_of_triangles);
  return arr_of_triangles;
}

function validateSidesOfTriangle() {
  var side1 = +document.querySelector('#triangle_side1').value;
  var side2 = +document.querySelector('#triangle_side2').value;
  var side3 = +document.querySelector('#triangle_side3').value;

  if ((this.id != 'triangle_name') && isNaN(+document.querySelector('#' + this.id).value)) {
    M.toast({html: 'Input Only Number'});
    return 'not valid';
  }

  if (this.id == 'triangle_side1'){
    if ((side3 && side2) && ((side3 + side2) > side1)) {
      M.toast({html: 'Triangle is Valid'});
      return 'valid';
    } else {
      M.toast({html: 'Triangle Not Valid Yet'});
      return 'not valid';
    }
  }

  if (this.id == 'triangle_side2'){
    if ((side1 && side3) && ((side1 + side3) > side2)) {
      M.toast({html: 'Triangle is Valid'});
      return 'valid';
    } else {
      M.toast({html: 'Triangle Not Valid Yet'});
      return 'not valid';
    }
  }

  if (this.id == 'triangle_side3'){
    if ((side1 && side2) && ((side1 + side2) > side3)) {
      M.toast({html: 'Triangle is Valid'});
      return 'valid';
    } else {
      M.toast({html: 'Triangle Not Valid Yet'});
      return 'not valid';
    }
  }

  if (side1 && side2 && side3) {
    triangle_p = countTriangle_P(side1, side2, side3);
    triangle_v = countTriangle_V(side1, side2, side3, triangle_p);
    if (triangle_v == 0) {
      M.toast({html: 'Triangle V can`t be counted'});
      return 'not valid';
    }
  }
}

function countTriangle_P(side1, side2, side3) {
  return +(1 / 2 * (side1 + side2 + side3)).toFixed(2);
}

function countTriangle_V(side1, side2, side3, p) {
  v1 = p * (p - side1) * (p - side2) * (p - side3);
  return +(Math.sqrt(this.v1).toFixed(2));
}