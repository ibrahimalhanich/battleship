const indeces = {
  //first row
  "c1rA": [0, 0],
  "c2rA": [0, 1],
  "c3rA": [0, 2],
  "c4rA": [0, 3],
  "c5rA": [0, 4],
  "c6rA": [0, 5],
  "c7rA": [0, 6],
  "c8rA": [0, 7],
  "c9rA": [0, 8],
  "c10rA": [0, 9],
  //second row
  "c1rB": [1, 0],
  "c2rB": [1, 1],
  "c3rB": [1, 2],
  "c4rB": [1, 3],
  "c5rB": [1, 4],
  "c6rB": [1, 5],
  "c7rB": [1, 6],
  "c8rB": [1, 7],
  "c9rB": [1, 8],
  "c10rB": [1, 9],
  //third row
  "c1rC": [2, 0],
  "c2rC": [2, 1],
  "c3rC": [2, 2],
  "c4rC": [2, 3],
  "c5rC": [2, 4],
  "c6rC": [2, 5],
  "c7rC": [2, 6],
  "c8rC": [2, 7],
  "c9rC": [2, 8],
  "c10rC": [2, 9],
  //fourth row
  "c1rD": [3, 0],
  "c2rD": [3, 1],
  "c3rD": [3, 2],
  "c4rD": [3, 3],
  "c5rD": [3, 4],
  "c6rD": [3, 5],
  "c7rD": [3, 6],
  "c8rD": [3, 7],
  "c9rD": [3, 8],
  "c10rD": [3, 9],
  //fifth row
  "c1rE": [4, 0],
  "c2rE": [4, 1],
  "c3rE": [4, 2],
  "c4rE": [4, 3],
  "c5rE": [4, 4],
  "c6rE": [4, 5],
  "c7rE": [4, 6],
  "c8rE": [4, 7],
  "c9rE": [4, 8],
  "c10rE": [4, 9],
  //sixth row
  "c1rF": [5, 0],
  "c2rF": [5, 1],
  "c3rF": [5, 2],
  "c4rF": [5, 3],
  "c5rF": [5, 4],
  "c6rF": [5, 5],
  "c7rF": [5, 6],
  "c8rF": [5, 7],
  "c9rF": [5, 8],
  "c10rF": [5, 9],
  //seventh row
  "c1rG": [6, 0],
  "c2rG": [6, 1],
  "c3rG": [6, 2],
  "c4rG": [6, 3],
  "c5rG": [6, 4],
  "c6rG": [6, 5],
  "c7rG": [6, 6],
  "c8rG": [6, 7],
  "c9rG": [6, 8],
  "c10rG": [6, 9],
  //eighth row
  "c1rH": [7, 0],
  "c2rH": [7, 1],
  "c3rH": [7, 2],
  "c4rH": [7, 3],
  "c5rH": [7, 4],
  "c6rH": [7, 5],
  "c7rH": [7, 6],
  "c8rH": [7, 7],
  "c9rH": [7, 8],
  "c10rH": [7, 9],
  //ninth row
  "c1rI": [8, 0],
  "c2rI": [8, 1],
  "c3rI": [8, 2],
  "c4rI": [8, 3],
  "c5rI": [8, 4],
  "c6rI": [8, 5],
  "c7rI": [8, 6],
  "c8rI": [8, 7],
  "c9rI": [8, 8],
  "c10rI": [8, 9],
  //ninth row
  "c1rJ": [9, 0],
  "c2rJ": [9, 1],
  "c3rJ": [9, 2],
  "c4rJ": [9, 3],
  "c5rJ": [9, 4],
  "c6rJ": [9, 5],
  "c7rJ": [9, 6],
  "c8rJ": [9, 7],
  "c9rJ": [9, 8],
  "c10rJ": [9, 9],
}

var playerBoard = [ // 0 for untouched, 1 for hit, -1 for miss
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var computerBoard = [ // 0 for untouched, 1 for hit, -1 for miss
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var gameState = 0; //0 in progress, 1 for player-1 win, -1 for player-2 win
var playerTurn = 1; //1 for player-1, -1 for player-2

$("section#playerBoard div.playable").on("click", firstClick);

function firstClick(event) {
  var clickedDiv = event.target;
  let clickedIndex = indeces[$(this).attr("id")];
  playerBoard[clickedIndex[0]][clickedIndex[1]] = 1;
  console.log(playerBoard);
}