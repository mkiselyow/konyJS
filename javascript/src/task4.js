var available_palindroms = [];

function isPalindromeOf() {
  createInputsForPalindrome();
}

function createInputsForPalindrome() {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').innerHTML = 
    "<div class='row palindrome_inputs'>" +
      "<h3>Input Number > 10 to check it is Palindrome</h3>" +
      "<div class='col s12'>" +
        "<div class='row'>" +
          "<div class='input-field col s4 offset-s4'>" +
            "<input id='number_to_check' type='text' class='validate'>" +
            "<label for='number_to_check'>Triangle name</label>" +
          "</div>" +
        "</div>" +
        "<div class='row'>" +
          "<div class='col s4 offset-s4'>" +
            "<button class='btn waves-effect waves-light' type='submit' name='action' id='submit_button'>" +
              "Submit" +
              "<i class='material-icons right'>send</i>"
            "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>";

  button = document.querySelector('#submit_button');
  button.addEventListener('click', submitNumberInput);

  user_inputs = document.querySelectorAll('input');
  user_inputs.forEach(function(el){
    el.addEventListener('change', validateInput.bind(el));
  });
  return 'form created';
}

function validateInput() {
  var current_number = document.querySelector('#number_to_check').value;

  if ((this.id == 'number_to_check') && (String(document.querySelector('#' + this.id).value).length < 2)) {
    M.toast({html: 'Input Number > 10'});
    return false;
  }
  return true;
}

function submitNumberInput() {
  var current_number =  document.querySelector('#number_to_check').value;
  var results = isAnyPalindrome(current_number);

  if (validateInput.call(document.querySelector('#number_to_check'))) {
    returnResultsPalindrome(results);
  } else {
    return;
  }

  return results;
}

var available_palindroms = [];

function isAnyPalindrome(current_number) {
  current_number = String(current_number)

  for (var i = current_number.length - 1; i > 0; i--) {
    current_comparing = current_number[i-1] + current_number[i];

    if (current_number[i] == current_number[i-1]) {
      // console.log(`${current_number} has ${current_comparing} substring`);
      searchPalindromsContinue(current_number, i);
    } else {
      // console.log(`${current_number} has no ${current_comparing} substring`);
    }
  }
  return available_palindroms.filter(onlyUnique);
}

isAnyPalindrome(current_number)

function searchPalindromsContinue(current_number, i) {
  var long_palindrome = [];

  for (var j = 0; j < Math.min((String(current_number).length - i), i); j++) {
    // console.log(`j = ${j}`);
    // console.log(`current_comparing = ${current_number[i+j]} and ${current_number[i-1-j]}`);
    if (current_number[i+j] == current_number[i-1-j]) {
      long_palindrome.push(current_number[i+j]);
      long_palindrome.unshift(current_number[i-1-j]);
      // console.log(`${current_number[i+j]} == ${current_number[i-1-j]}`);
    } else {
      // console.log(`${current_number[i+j]} != ${current_number[i-1-j]}`);
      available_palindroms.push(long_palindrome.join(''));
      return long_palindrome.join('');
    }
  }
  available_palindroms.push(long_palindrome.join(''));
  return long_palindrome.join('');
}

function returnResultsPalindrome(results) {
  hidePreviousContent.call('.palindrome_inputs');

  if (results) {
    document.querySelector('#content').innerHTML += "<ul" + 
      " class='collection with-header'>" +
      "<li class='collection-header'><h4>Available Palindroms Are :</h4></li></ul>";
    for (var i = results.length - 1; i >= 0; i--) {
      document.querySelector('#content').innerHTML +=  "<ul" + 
          " class='collection with-header'>" + "<li" +
        " class='collection-item' id='results" + i +
        "' style='display:none;'>" + results[i] +
        "</li></ul>";

      setTimeout(outputSingleResult.bind(i), (1000 * i));
    }
  } else {
    document.querySelector('#content').innerHTML += "<ul" + 
      " class='collection with-header'>" +
      "<li class='collection-header'><h4>Sorry: No Available Palindroms have been Found</h4></li></ul>";
  }
  return results;
}

function outputSingleResult() {
  $('#results' + this).toggle(2000);
}