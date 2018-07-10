function areHappyTickets() {
  createInputsForHappyTickets();
}

function Ticket(number) {
  this.number = number;
  this.is_happy_number_meth1 = checkHappyUnhappyNumber(countLeftRightSums(number));
  this.is_happy_number_meth2 = checkHappyUnhappyNumber(countOddEvenSums(number));
}

function countLeftRightSums(number) {
  var left_side_sum  = 0;
  var right_side_sum = 0;
  var number_to_arr = number.toString().split('');

  for(var i = 0; i < 6; i++) {
    if (i < 3) {
      left_side_sum  += Number(number_to_arr[i]);
    } else {
      right_side_sum += Number(number_to_arr[i]);
    }
  }
  return [left_side_sum, right_side_sum];
}

function checkHappyUnhappyNumber(arr_of_sums) {
  if (arr_of_sums[0] == arr_of_sums[1]) {
    return true;
  }
  return false;
}

function countOddEvenSums(number) {
  var number_to_arr = number.toString().split('');
  var odd_sum  = 0;
  var even_sum = 0;

  number_to_arr.forEach(function(el){
    if (Number(el) % 2 != 0) {
      odd_sum  += Number(el);
    } else {
      even_sum += Number(el);
    }
  });
  return [odd_sum, even_sum];
}

function countHappyTicketsInInterval(interval) {
  var happy_tickets_in_interval_meth1 = 0;
  var happy_tickets_in_interval_meth2 = 0;
  var start = Math.min(interval[0], interval[1]);
  var end   = Math.max(interval[0], interval[1]);

  for (var i = start; i <= end; i++) {
    if (new Ticket(i).is_happy_number_meth1) happy_tickets_in_interval_meth1++;
    if (new Ticket(i).is_happy_number_meth2) happy_tickets_in_interval_meth2++;
  }

  this.happy_tickets_in_interval_meth1 = happy_tickets_in_interval_meth1;
  this.happy_tickets_in_interval_meth2 = happy_tickets_in_interval_meth2;
}

function validateTickets() {
  if (this == window) { 
    var start_of_interval = +document.querySelector('#start_of_interval').value;
    var end_of_interval = +document.querySelector('#end_of_interval').value;

    if (validateTicket(start_of_interval) && validateTicket(end_of_interval)) {
      return true;
    }
    return false
  } else if (this.id) {
    var current_value = +document.querySelector('#' + this.id).value;
    validateTicket(current_value);
  }
  return false;
}

function validateTicket(some_ticket) {
  if (isNaN(some_ticket) || (String(some_ticket).length < 6)) {
    M.toast({html: 'Input Only 6 digit Number'});
    return false;
  }
  return true;
}

function createInputsForHappyTickets() {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').innerHTML = 
    "<div class='row tickets_input'>" +
      "<h3>Input Start and End of interval to " + 
        "check Happy Tickets count by both methods</h3>" +
      "<div class='col s12'>" +
        "<div class='row'>" +
          "<div class='input-field col s4 offset-s2'>" +
            "<input id='start_of_interval' type='text' class='validate'>" +
            "<label for='start_of_interval'>Start of interval</label>" +
          "</div>" +
          "<div class='input-field col s4'>" +
            "<input id='end_of_interval' type='text' class='validate'>" +
            "<label for='end_of_interval'>End of interval</label>" +
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
  button.addEventListener('click', submitTicketsInput);

  user_inputs = document.querySelectorAll('input');
  user_inputs.forEach(function(el){
    el.addEventListener('change', validateTickets.bind(el));
  });
  return 'form created';
}

function submitTicketsInput() {
  if (validateTickets()) {
    var start_of_interval = +document.querySelector('#start_of_interval').value;
    var end_of_interval = +document.querySelector('#end_of_interval').value;

    var result = new countHappyTicketsInInterval([start_of_interval, end_of_interval]);
    renderResultsTickets(result);
    return result;
  }
  return false;
}

function renderResultsTickets(result) {
  hidePreviousContent.call('.tickets_input');

  document.querySelector('#content').innerHTML += " " + 
    "<table class='striped ticket_results' style='display:none;'>" +
      "<thead>" +
        "<tr>" +
          "<th>Easy Count</th>" +
          "<th>Hard Count</th>" +
        "</tr>" +
      "</thead>" +
      "<tbody>" +
        "<tr>" +
          "<th>" + `${result.happy_tickets_in_interval_meth1}` + "</th>" +
          "<th>" + `${result.happy_tickets_in_interval_meth2}` + "</th>" +
        "</tr>" +
      "</tbody>" +
    "</table>";

  $('.ticket_results').toggle(2000);
}