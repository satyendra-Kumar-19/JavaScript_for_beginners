let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#restart");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const resetGame = () => {
    turnO = true;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    msgContainer.classList.add("hide");
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

const winPatterns = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3

    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3

    [0, 4, 8], // Main diagonal
    [2, 4, 6]  // Other diagonal
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    });


});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} Wins 🎉`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (
            pos1Val !== "" &&
            pos1Val === pos2Val &&
            pos2Val === pos3Val
        ) {
            console.log(`${pos1Val} wins!`);
            disableBoxes();
            showWinner(pos1Val);
        }
    }
};























