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