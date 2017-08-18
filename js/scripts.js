//Back end
var numberList = [];
var multiplesOfThree = [];
var multiplesOfFive = [];
var multiplesOfFifteen = [];
var numberString = [];
var pingList = [];
var pongList = [];
var pingPongList = [];

//Generate list from 1 to user number
function countToNumber(userNumber){
  for(var i = 1; i <= userNumber; i++){
    numberList.push(i);
  }
}

function getMultipesOfThree(numberList){
  for(var j = 0; j <= numberList.length; j++){
    if (j % 3 === 0){
      multiplesOfThree.push(j);
      console.log(multiplesOfThree);
    }
  }
}

function getMultipesOfFive(numberList){
  for(var k = 0; k <= numberList.length; k++){
    if (k % 5 === 0){
      multiplesOfFive.push(k);
      // console.log(multiplesOfFive);
    }
  }
}

function getMultipesofFifteen(numberList){
  for(var l = 0; l <= numberList.length; l++){
    if (l % 15 === 0){
      multiplesOfFifteen.push(l);
      // console.log(multiplesOfFifteen);
    }
  }
}

function replaceWithPing(multiplesOfThree){
  var pingList = multiplesOfThree.fill("ping");
  console.log(pingList);
}

function replaceWithPong(multiplesOfFive){
  var pongList = multiplesOfFive.fill("pong");
  console.log(pongList);
}

function replaceWithPingPong(multiplesOfFifteen){
  var pingPongList = multiplesOfFifteen.fill("ping-pong");
  console.log(pingPongList);
}

function makeString(numberList){
  numberString = numberList.toString().split(',');
  console.log(numberString);
}

//Front end
$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    countToNumber(userNumber);
    getMultipesOfThree(numberList);
    getMultipesOfFive(numberList);
    getMultipesofFifteen(numberList);
    replaceWithPing(multiplesOfThree);
    replaceWithPong(multiplesOfFive);
    replaceWithPingPong(multiplesOfFifteen);
    makeString(numberList);
    // replaceWithPing(numberList);
    $('#result').text(numberList);
  });
});
