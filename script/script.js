let box = document.querySelector("#game");
let resetBtn = document.querySelector(".resetGame");
let win = document.querySelector(".winnerScreen");
let playbtn = win.children[2];

let turnO = true;
let count = 0;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let game = [];
for (let i = 0; i < 9; i++) {
  game.push(box.children[i]);
}


//winner name function
const winName = (winner) => {
  win.children[1].innerText = `${winner}`;
  win.classList.remove("hide");
  disable();
};

//button disable function
const disable = () => {
  for (const i of game) {
    i.disabled = true;
  }
};

//enable Function
const enable = () => {
  for (const i of game) {
    i.disabled = false;
    i.innerText = "";
  }
};

//reset function
const resetGame = () => {
  turnO = true;
  count = 0;
  enable();
  win.classList.add("hide");
};



//checking winnner
let winnerCheck = () => {
  for (const i of winPattern) {
    let playVar1 = game[i[0]].innerText;
    let playVar2 = game[i[1]].innerText;
    let playVar3 = game[i[2]].innerText;
    if (playVar1 !== "" && playVar2 !== "" && playVar3 !== "") {
      if (playVar1 === playVar2 && playVar2 === playVar3) {
        winName(playVar1);
      }
    }
  }
};

//main game code
game.forEach((gameBox) => {
  gameBox.addEventListener("click", () => {
    if (turnO === true) {
      gameBox.innerText = "O";
      gameBox.removeAttribute('style', 'color: #0079FF;')
      turnO = false;
    } else {
      gameBox.innerText = "X";
      gameBox.setAttribute('style', 'color: #0079FF;')
      turnO = true;
    }
    gameBox.disabled = true;
    winnerCheck();
    count++;
  });
});

//reset and play again button setting
playbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
