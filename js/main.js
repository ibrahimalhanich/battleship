//first element of any given mapIndex is for player-1's occupation on that index (1 means p1 occupied, 0 not occupied)
//second element is for player-1's index being a hit, miss or undiscovered (1 is hit, -1 is miss, 0 is undiscovered)
//third element is for player-2's occupation on that index (1 means p2 occupied, 0 not occupied)
//fourth element is for player-2's index being a hit, miss or undiscovered (1 is hit, -1 is miss, 0 is undiscovered)
var mapIndex = {
  //first row 
  "gc-1-1": [0, 0, 0, 0],
  "gc-2-1": [0, 0, 0, 0],
  "gc-3-1": [0, 0, 0, 0],
  "gc-4-1": [0, 0, 0, 0],
  "gc-5-1": [0, 0, 0, 0],
  "gc-6-1": [0, 0, 0, 0],
  "gc-7-1": [0, 0, 0, 0],
  "gc-8-1": [0, 0, 0, 0],
  "gc-9-1": [0, 0, 0, 0],
  "gc-10-1": [0, 0, 0, 0],
  //second row
  "gc-1-2": [0, 0, 0, 0],
  "gc-2-2": [0, 0, 0, 0],
  "gc-3-2": [0, 0, 0, 0],
  "gc-4-2": [0, 0, 0, 0],
  "gc-5-2": [0, 0, 0, 0],
  "gc-6-2": [0, 0, 0, 0],
  "gc-7-2": [0, 0, 0, 0],
  "gc-8-2": [0, 0, 0, 0],
  "gc-9-2": [0, 0, 0, 0],
  "gc-10-2": [0, 0, 0, 0],
  //third row
  "gc-1-3": [0, 0, 0, 0],
  "gc-2-3": [0, 0, 0, 0],
  "gc-3-3": [0, 0, 0, 0],
  "gc-4-3": [0, 0, 0, 0],
  "gc-5-3": [0, 0, 0, 0],
  "gc-6-3": [0, 0, 0, 0],
  "gc-7-3": [0, 0, 0, 0],
  "gc-8-3": [0, 0, 0, 0],
  "gc-9-3": [0, 0, 0, 0],
  "gc-10-3": [0, 0, 0, 0],
  //fourth row
  "gc-1-4": [0, 0, 0, 0],
  "gc-2-4": [0, 0, 0, 0],
  "gc-3-4": [0, 0, 0, 0],
  "gc-4-4": [0, 0, 0, 0],
  "gc-5-4": [0, 0, 0, 0],
  "gc-6-4": [0, 0, 0, 0],
  "gc-7-4": [0, 0, 0, 0],
  "gc-8-4": [0, 0, 0, 0],
  "gc-9-4": [0, 0, 0, 0],
  "gc-10-4": [0, 0, 0, 0],
  //fifth row
  "gc-1-5": [0, 0, 0, 0],
  "gc-2-5": [0, 0, 0, 0],
  "gc-3-5": [0, 0, 0, 0],
  "gc-4-5": [0, 0, 0, 0],
  "gc-5-5": [0, 0, 0, 0],
  "gc-6-5": [0, 0, 0, 0],
  "gc-7-5": [0, 0, 0, 0],
  "gc-8-5": [0, 0, 0, 0],
  "gc-9-5": [0, 0, 0, 0],
  "gc-10-5": [0, 0, 0, 0],
  //sixth row
  "gc-1-6": [0, 0, 0, 0],
  "gc-2-6": [0, 0, 0, 0],
  "gc-3-6": [0, 0, 0, 0],
  "gc-4-6": [0, 0, 0, 0],
  "gc-5-6": [0, 0, 0, 0],
  "gc-6-6": [0, 0, 0, 0],
  "gc-7-6": [0, 0, 0, 0],
  "gc-8-6": [0, 0, 0, 0],
  "gc-9-6": [0, 0, 0, 0],
  "gc-10-6": [0, 0, 0, 0],
  //seventh row
  "gc-1-7": [0, 0, 0, 0],
  "gc-2-7": [0, 0, 0, 0],
  "gc-3-7": [0, 0, 0, 0],
  "gc-4-7": [0, 0, 0, 0],
  "gc-5-7": [0, 0, 0, 0],
  "gc-6-7": [0, 0, 0, 0],
  "gc-7-7": [0, 0, 0, 0],
  "gc-8-7": [0, 0, 0, 0],
  "gc-9-7": [0, 0, 0, 0],
  "gc-10-7": [0, 0, 0, 0],
  //eighth row
  "gc-1-8": [0, 0, 0, 0],
  "gc-2-8": [0, 0, 0, 0],
  "gc-3-8": [0, 0, 0, 0],
  "gc-4-8": [0, 0, 0, 0],
  "gc-5-8": [0, 0, 0, 0],
  "gc-6-8": [0, 0, 0, 0],
  "gc-7-8": [0, 0, 0, 0],
  "gc-8-8": [0, 0, 0, 0],
  "gc-9-8": [0, 0, 0, 0],
  "gc-10-8": [0, 0, 0, 0],
  //ninth row
  "gc-1-9": [0, 0, 0, 0],
  "gc-2-9": [0, 0, 0, 0],
  "gc-3-9": [0, 0, 0, 0],
  "gc-4-9": [0, 0, 0, 0],
  "gc-5-9": [0, 0, 0, 0],
  "gc-6-9": [0, 0, 0, 0],
  "gc-7-9": [0, 0, 0, 0],
  "gc-8-9": [0, 0, 0, 0],
  "gc-9-9": [0, 0, 0, 0],
  "gc-10-9": [0, 0, 0, 0],
  //tenth row
  "gc-1-10": [0, 0, 0, 0],
  "gc-2-10": [0, 0, 0, 0],
  "gc-3-10": [0, 0, 0, 0],
  "gc-4-10": [0, 0, 0, 0],
  "gc-5-10": [0, 0, 0, 0],
  "gc-6-10": [0, 0, 0, 0],
  "gc-7-10": [0, 0, 0, 0],
  "gc-8-10": [0, 0, 0, 0],
  "gc-9-10": [0, 0, 0, 0],
  "gc-10-10": [0, 0, 0, 0],
}

var submitCounter = 5; //submit five ships total, lengths from 1-5 starting from the ship of length 5
var winState = 0; //0 in progress, 1 for player-1 win, -1 for player-2 win
var gameState = 0; //0 for setup, 1 for player-1's turn, -1 for player-2's turn
var strIndex;
var direction;
$("div.info button.submit").on("click", submitCoordinate);

function submitCoordinate() {
  console.log("Submit");
  var str = $("input.coordinates").val().split(","); //str=["1-1", "vertical"]
  storeMap(str);
  console.log(submitCounter);
}

function storeMap(inputString) {
  strIndex = [parseInt(inputString[0].split("-")[0]), parseInt(inputString[0].split("-")[1])];
  direction = inputString[1];
  let returnFlag; // horizontal flag is the first element, vertical flag is the second element

  if (submitCounter === 0) {
    alert("No more ships to place");
    return;
  }

  returnFlag = flagger(direction, strIndex, submitCounter);
  submitCounter = mapper(direction, strIndex, submitCounter, returnFlag);
}

function flagger(direction, strIndex, submitCounter) {
  let flagVar = [0, 0];
  for (let i = 0; i < submitCounter; i++) {
    if (direction === "horizontal" && strIndex[0] + submitCounter < 12) {
      if (mapIndex[`gc-${strIndex[0] + i}-${strIndex[1]}`][0] === 1) {
        flagVar[0] = 1;

      }
    }

    if (direction === "vertical" && strIndex[1] + submitCounter < 12) {
      if (mapIndex[`gc-${strIndex[0]}-${strIndex[1] + i}`][0] === 1 && direction === "vertical") {
        flagVar[1] = 1;
      }
    }
  }
  return flagVar;
}

function mapper(direction, strIndex, submitCounter, returnFlag) {
  if (direction === "vertical" && (submitCounter + strIndex[1] < 12) && (strIndex[0] < 11) && (strIndex[1] < 11) && (returnFlag[1] === 0)) {
    for (let i = 0; i < submitCounter; i++) {
      mapIndex[`gc-${strIndex[0]}-${strIndex[1] + i}`][0] = 1;
      console.log($(`#gc-${strIndex[0]}-${strIndex[1] + i}`));
      $(`#gc-${strIndex[0]}-${strIndex[1] + i}`).append(`<div class="ship" id="size-${submitCounter}"></div>`);
    }
    submitCounter = submitCounter - 1;
  } else if (direction === "horizontal" && (submitCounter + strIndex[0] < 12) && (strIndex[0] < 11) && (strIndex[1] < 11) && (returnFlag[0] === 0)) {
    for (let i = 0; i < submitCounter; i++) {
      mapIndex[`gc-${strIndex[0] + i}-${strIndex[1]}`][0] = 1;
      $(`#gc-${strIndex[0] + i}-${strIndex[1]}`).append(`<div class="ship" id="size-${submitCounter}"></div>`);
    }
    submitCounter = submitCounter - 1;
  } else {
    alert("invalid coordinates or direction, try again");
  }
  return submitCounter;
}

// function appendShip(direction, flag) {
//   if()
//   for (let i = 0; i < submitCounter; i++) {
//     mapIndex[`gc-${strIndex[0] + i}-${strIndex[1]}`][0] = 1;

//   }
// }
// var playerBoard = [ // 0 for untouched, 1 for hit, -1 for miss
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// var computerBoard = [ // 0 for untouched, 1 for hit, -1 for miss
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// "c1rB": [1, 0],
// "c2rB": [1, 1],
// "c3rB": [1, 2],
// "c4rB": [1, 3],
// "c5rB": [1, 4],
// "c6rB": [1, 5],
// "c7rB": [1, 6],
// "c8rB": [1, 7],
// "c9rB": [1, 8],
// "c10rB": [1, 9],
// //third row
// "c1rC": [2, 0],
// "c2rC": [2, 1],
// "c3rC": [2, 2],
// "c4rC": [2, 3],
// "c5rC": [2, 4],
// "c6rC": [2, 5],
// "c7rC": [2, 6],
// "c8rC": [2, 7],
// "c9rC": [2, 8],
// "c10rC": [2, 9],
// //fourth row
// "c1rD": [3, 0],
// "c2rD": [3, 1],
// "c3rD": [3, 2],
// "c4rD": [3, 3],
// "c5rD": [3, 4],
// "c6rD": [3, 5],
// "c7rD": [3, 6],
// "c8rD": [3, 7],
// "c9rD": [3, 8],
// "c10rD": [3, 9],
// //fifth row
// "c1rE": [4, 0],
// "c2rE": [4, 1],
// "c3rE": [4, 2],
// "c4rE": [4, 3],
// "c5rE": [4, 4],
// "c6rE": [4, 5],
// "c7rE": [4, 6],
// "c8rE": [4, 7],
// "c9rE": [4, 8],
// "c10rE": [4, 9],
// //sixth row
// "c1rF": [5, 0],
// "c2rF": [5, 1],
// "c3rF": [5, 2],
// "c4rF": [5, 3],
// "c5rF": [5, 4],
// "c6rF": [5, 5],
// "c7rF": [5, 6],
// "c8rF": [5, 7],
// "c9rF": [5, 8],
// "c10rF": [5, 9],
// //seventh row
// "c1rG": [6, 0],
// "c2rG": [6, 1],
// "c3rG": [6, 2],
// "c4rG": [6, 3],
// "c5rG": [6, 4],
// "c6rG": [6, 5],
// "c7rG": [6, 6],
// "c8rG": [6, 7],
// "c9rG": [6, 8],
// "c10rG": [6, 9],
// //eighth row
// "c1rH": [7, 0],
// "c2rH": [7, 1],
// "c3rH": [7, 2],
// "c4rH": [7, 3],
// "c5rH": [7, 4],
// "c6rH": [7, 5],
// "c7rH": [7, 6],
// "c8rH": [7, 7],
// "c9rH": [7, 8],
// "c10rH": [7, 9],
// //ninth row
// "c1rI": [8, 0],
// "c2rI": [8, 1],
// "c3rI": [8, 2],
// "c4rI": [8, 3],
// "c5rI": [8, 4],
// "c6rI": [8, 5],
// "c7rI": [8, 6],
// "c8rI": [8, 7],
// "c9rI": [8, 8],
// "c10rI": [8, 9],
// //tenth row
// "c1rJ": [9, 0],
// "c2rJ": [9, 1],
// "c3rJ": [9, 2],
// "c4rJ": [9, 3],
// "c5rJ": [9, 4],
// "c6rJ": [9, 5],
// "c7rJ": [9, 6],
// "c8rJ": [9, 7],
// "c9rJ": [9, 8],
// "c10rJ": [9, 9],