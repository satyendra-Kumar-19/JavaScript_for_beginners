let userScore = 0;
let comScore = 0;

let userScorePara = document.querySelector('#user');
let comScorePara = document.querySelector('#com');




const choice = document.querySelectorAll(".img");
let mg = document.querySelector("#msg");
console.log(msg);
const genComCh = () => {
    const options = ['Rock', 'Paper', 'Scissor'];
    const randIdx = Math.floor(Math.random() * 3); // this is for generating number from 0,1,2 forther useful for indexs.
    return options[randIdx];
}



const playGame = (userchoice) => {
    console.log("Your choice =", userchoice);
    const comChoice = genComCh();
    console.log("Computer's choice :", comChoice);
    if (userchoice === "Rock" & comChoice === "Scissor") {
        mg.innerText = "You won against computer!!!";
        mg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else if (userchoice === "Rock" & comChoice === "Paper") {
        mg.innerText = "Computer won against you!!!";
        mg.style.backgroundColor = "red ";
        comScore++;
        comScorePara.innerText = comScore;
    } else if (userchoice === "Scissor" & comChoice === "Paper") {
        mg.innerText = "You won against computer!!!";
        mg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
        return userScore;
    } else if (userchoice === "Scissor" & comChoice === "Rock") {
        mg.innerText = "Computer won against you!!!";
        mg.style.backgroundColor = "red";
        comScore++;
        comScorePara.innerText = comScore;
    } else if (userchoice === "Paper" & comChoice === "Rock") {
        mg.innerText = "You won against computer!!!";
        mg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else if (userchoice === "Paper" & comChoice === "Scissor") {
        mg.innerText = "Computer won against you!!!";
        mg.style.backgroundColor = "red";
        comScore++;
        comScorePara.innerText = comScore;
    } else {
        mg.innerText = "The match is Draw!!!";
        mg.style.backgroundColor = "yellow";
    }
};





choice.forEach((sat) => {
    sat.addEventListener("click", () => {
        const userch = sat.getAttribute("id");
        playGame(userch);
    });
});
