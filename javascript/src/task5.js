function areHappyTickets() {
  // body...
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
  var number_to_arr = [1, 2, 3, 4, 5, 6];
  var odd_sum  = 0;
  var even_sum = 0;

  number_to_arr.forEach(function(el){
    if (el % 2 != 0) {
      odd_sum  += el;
    } else {
      even_sum += el;
    }
  });
  return [odd_sum, even_sum];
}

var ticket1 = new Ticket('123456');
ticket1.is_happy_number_meth1;
ticket1.is_happy_number_meth2;
var ticket2 = new Ticket('123123');
ticket2.is_happy_number_meth1;
ticket2.is_happy_number_meth2;

function validateNumber(number) {
  // body...
}