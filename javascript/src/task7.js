function outputFibonachiInRange() {
  var start_range = Math.round(+prompt('start range', 10));
  var end_range = Math.round(+prompt('end range', 100));
  var params = [start_range, end_range];
  if (!validateNumberParams(params)) return;
  for (var i = start_range; (i + i - 1) < end_range; i = (i + i - 1)) {
    console.log(i + i - 1);
  }
}