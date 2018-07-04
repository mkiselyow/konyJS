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