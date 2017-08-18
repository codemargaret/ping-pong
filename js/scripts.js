//Back end
var numberList = [];
// var numberString = "";
var multiplesOfThree = [];
var pingList = [];

//Generate list from 1 to user number
function countToNumber(userNumber){
  for(var i = 1; i <= userNumber; i++){
    numberList.push(i);
  }
}

function getMultipesofThree(numberList){
  for(var j = 0; j <= numberList.length; j++){
    if (j % 3 === 0){
      multiplesOfThree.push(j);
    } 
  }
}

//Make array of numbers into a string to run replace
// function makeString(numberList){
//   numberString = numberList.toString();
// }

function replaceWithPing(numberString){
  for(var k = 0; k <= numberString.length; k++){
    if ((k % 3) === 0) {
      var pingList = numberString.replace(k, "ping");
    }
  }
}

//Front end
$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    countToNumber(userNumber);
    getMultipesofThree(numberList);
    alert(multiplesOfThree);
    alert(numberList);
    // makeString(numberList);
    // alert(numberString);
    // replaceWithPing(numberList);
    $('#result').text(numberList);
  });
});
