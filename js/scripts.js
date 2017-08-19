//Back end
var numberList = [];
var finalList = [];

//Generate list from 1 to user number
function countToNumber(userNumber){
  for(var i = 1; i <= userNumber; i++){
    numberList.push(i);
  }
}

//Replace numbers with words and output as list
function makeFinalList(numberList) {
  for(var j = 1; j <= numberList.length; j++){
    if ( ((j % 3) !== 0) && ((j % 5) !== 0)){
      finalList.push("<li>" + j + "</li>");
    } else if (j % 15 === 0) {
      finalList.push("<li class='purple-ping-pong'>" + "ping-pong" + "</li>");
    } else if (j % 5 === 0){
      finalList.push("<li class='blue-pong'>" + "pong" + "</li>");
    } else if (j % 3 === 0){
      finalList.push("<li class='red-ping'>" + "ping" + "</li>");
    }
  }
}

//Front end
$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    countToNumber(userNumber);
    makeFinalList(numberList);
    $('#finalList').append(finalList);
  });
  $('#reset').click(function(){
    $('#number').text();
    $('#finalList').empty();
    numberList = [];
    finalList = [];
  });
});
