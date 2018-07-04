function outputNaturalNumbersWhereSqareLowerThen() {
  var number = Math.round(+prompt('number', 10));
  var params = [];
  params.push(number);
  if (!validateNumberParams(params)) return;
  for (var i = 1; number > (i * i); i++) {
    console.log(i);
  }
}