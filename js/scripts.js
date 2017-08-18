//Back end
var numberList = [];

function countToNumber(userNumber){
  for(var i = 1; i <= userNumber; i++){
    numberList.push(i);
  }
}

//Front end
$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    countToNumber(userNumber);
    $('#result').text(numberList);
  });
});
