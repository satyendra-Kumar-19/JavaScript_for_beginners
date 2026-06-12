let userScore = 0 ;
let comScore = 0 ;

const choice = document.querySelectorAll(".img");


choice.forEach((sat) => {
    
    sat.addEventListener("click",() => {
        const userch = sat.getAttribute("id");
        console.log("choice was clicked",userch);
    });
});