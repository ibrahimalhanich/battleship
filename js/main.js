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
var gcSpec; //grid-cell specificity (aka: am I modifying the player's grid or the cpu's grid?)
var clickBind = 1;
var hitCounter = 0;
var cpuHitCounter = 0;
$("div.info button.submit").on("click", submitCoordinate);

function submitCoordinate() {
  console.log(submitCounter, "submitCoordinate");
  gcSpec = 0;
  var str = $("input.coordinates").val().split(","); //str=["1-1", "vertical"]
  storeMap(str);
  if (submitCounter === 0) {
    initRandomizer();
    console.log("return submit");
    return;
  } else {
    $(".info p").text(`Now place your ${submitCounter}-block ship.`);
  }
}

function storeMap(inputString) {
  strIndex = [parseInt(inputString[0].split("-")[0]), parseInt(inputString[0].split("-")[1])];
  direction = inputString[1];
  let returnFlag; // horizontal flag is the first element, vertical flag is the second element
  returnFlag = flagger(direction, strIndex, submitCounter, gcSpec);
  submitCounter = mapper(direction, strIndex, submitCounter, returnFlag, gcSpec);
}

function flagger(direction, strIndex, submitCounter, gcSpec) {
  let flagVar = [0, 0];
  if (gcSpec === 0) {
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
  } else {
    for (let i = 0; i < submitCounter; i++) {
      if (direction === "horizontal" && strIndex[0] + submitCounter < 12) {
        if (mapIndex[`gc-${strIndex[0] + i}-${strIndex[1]}`][2] === 1) {
          flagVar[0] = 1;

        }
      }

      if (direction === "vertical" && strIndex[1] + submitCounter < 12) {
        if (mapIndex[`gc-${strIndex[0]}-${strIndex[1] + i}`][2] === 1 && direction === "vertical") {
          flagVar[1] = 1;
        }
      }
    }
    return flagVar;
  }

}

function mapper(direction, strIndex, submitCounter, returnFlag, gcSpec) {
  if (gcSpec === 0) {
    if (direction === "vertical" && (submitCounter + strIndex[1] < 12) && (strIndex[0] < 11) && (strIndex[1] < 11) && (returnFlag[1] === 0)) {
      for (let i = 0; i < submitCounter; i++) {
        mapIndex[`gc-${strIndex[0]}-${strIndex[1] + i}`][0] = 1;
        $(`section#playerBoard #gc-${strIndex[0]}-${strIndex[1] + i}`).append(`<div class="ship" id="size-${submitCounter}"></div>`);
      }
      submitCounter = submitCounter - 1;
    } else if (direction === "horizontal" && (submitCounter + strIndex[0] < 12) && (strIndex[0] < 11) && (strIndex[1] < 11) && (returnFlag[0] === 0)) {
      for (let i = 0; i < submitCounter; i++) {
        mapIndex[`gc-${strIndex[0] + i}-${strIndex[1]}`][0] = 1;
        $(`section#playerBoard #gc-${strIndex[0] + i}-${strIndex[1]}`).append(`<div class="ship" id="size-${submitCounter}"></div>`);
      }
      submitCounter = submitCounter - 1;
    } else {
      alert("invalid coordinates or direction, try again");
    }
    return submitCounter;
  } else {
    if (direction === "vertical" && (submitCounter + strIndex[1] < 12) && (strIndex[0] < 11) && (strIndex[1] < 11) && (returnFlag[1] === 0)) {
      for (let i = 0; i < submitCounter; i++) {
        mapIndex[`gc-${strIndex[0]}-${strIndex[1] + i}`][2] = 1;
        $(`section#computerBoard #gc-${strIndex[0]}-${strIndex[1] + i}`).append(`<div class="ship" id="size-${submitCounter}"></div>`);
      }
      submitCounter = submitCounter - 1;
    } else if (direction === "horizontal" && (submitCounter + strIndex[0] < 12) && (strIndex[0] < 11) && (strIndex[1] < 11) && (returnFlag[0] === 0)) {
      for (let i = 0; i < submitCounter; i++) {
        mapIndex[`gc-${strIndex[0] + i}-${strIndex[1]}`][2] = 1;
        $(`section#computerBoard #gc-${strIndex[0] + i}-${strIndex[1]}`).append(`<div class="ship" id="size-${submitCounter}"></div>`);
      }
      submitCounter = submitCounter - 1;
    } else {
      // alert("invalid coordinates or direction, try again");
    }
    return submitCounter;
  }

}


function initRandomizer() {
  $(".info h3").text(`No more ships to place. Now randomize the computer's grid.`);
  $(".info p").remove();
  $(".info section.input").remove();
  $(".info").append(`<section class="randomizer"><button class="random">Randomize CPU Grid</button></section>`);
  submitCounter = 5;
  gcSpec = 1;
  $("button.random").on("click", randomizerFunc);
  console.log("left randomizerFunc");
}

function randomizerFunc() {
  while (submitCounter !== 0) {
    let randomizedIndex = [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)];
    let directionIndex = Math.floor(Math.random() * 2);
    let directions = ["vertical", "horizontal"];
    let randomDirectionFlag = flagger(directions[directionIndex], randomizedIndex, submitCounter, gcSpec);
    submitCounter = mapper(directions[directionIndex], randomizedIndex, submitCounter, randomDirectionFlag, gcSpec);
  }
  //after you're done randomizing the cpu grid you now want to update the informational section and allow
  //the user to start playing the game. (aka: handle any click events on the opponent grid)
  console.log("play?")
  $(".info h3").text("Your move!");
  $(".info section.randomizer").remove();
  $("section#computerBoard div.playable").on("click", gameClick);
}

function gameClick(evt) {
  // let playerTurn = 1; //if 1, player plays, else: computer plays
  if (clickBind === 0) {
    return;
  }
  if (hitCounter === 15 || cpuHitCounter === 15) {
    return;
  }
  if ($(evt.target).parent().hasClass("unplayable")) {
    return;
  }
  if ($(evt.target).hasClass("ship")) {
    hit($(evt.target));
    hitCounter++;
    if (hitCounter === 15) {
      $(".info h3").text("You are the winner!");
      return;
    }
  } else if ($(evt.target)) {
    miss($(evt.target));
  }
  clickBind = 0;
  // playerTurn = playerTurn * -1;
  $(".info h3").text("Melissa's turn!");
  setTimeout("computerTurn()", 1000);
}

function hit(evtTarget) {
  evtTarget.attr("class", "hit-ship");
  evtTarget.text("X");
  evtTarget.parent().attr("class", "unplayable");
  mapIndex[evtTarget.parent().attr("id")][3] = 1;
  console.log(mapIndex[evtTarget.parent().attr("id")]);
}

function miss(evtTarget) {
  evtTarget.text(".");
  evtTarget.attr("class", "unplayable");
  mapIndex[evtTarget.attr("id")][3] = -1;
}

function computerTurn() {
  let randomizedIndex = [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)];
  str = `gc-${randomizedIndex[0]}-${randomizedIndex[1]}`;
  let indexElement = $(`section#playerBoard #${str}`);
  if (mapIndex[str][1] !== 0) {
    computerTurn();
  } else {
    if (indexElement.children().length > 0) {
      indexElement.children().attr("class", "hit-ship");
      indexElement.children().text("X");
      indexElement.attr("class", "unplayable");
      mapIndex[str][1] = 1;
      cpuHitCounter++;
    } else {
      indexElement.text(".");
      indexElement.attr("class", "unplayable");
      mapIndex[str][1] = -1;
    }
    if (cpuHitCounter < 15) {
      $(".info h3").text("Your move!");
      clickBind = 1;
    } else if (cpuHitCounter === 15) {
      $(".info h3").text("Melissa is the winner!");
    }
  }
  return;
}