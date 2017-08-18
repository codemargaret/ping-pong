//Back end
var numberList = [];
var finalList = [];

//Generate list from 1 to user number
function countToNumber(userNumber){
  for(var i = 1; i <= userNumber; i++){
    numberList.push(i);
  }
}

function makeFinalList(numberList) {
  for(var j = 1; j <= numberList.length; j++){
    if ( ((j % 3) !== 0) && ((j % 5) !== 0)){
      finalList.push(j);
    } else if (j % 15 === 0) {
      finalList.push("ping-pong");
      console.log(finalList);
    } else if (j % 5 === 0){
      finalList.push("pong");
    } else if (j % 3 === 0){
      finalList.push("ping");
    }
  }
}

// function makeString(numberList){
//   numberString = numberList.toString().split(',');
// }

//Front end
$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    countToNumber(userNumber);
    makeFinalList(numberList);
    $('#finalList').text(finalList);
  });
});
