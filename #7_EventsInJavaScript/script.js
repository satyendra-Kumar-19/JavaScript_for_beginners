// // Event Handling 
// let a = 0;

// let bt= document.querySelector('#bn');
// bt.onclick = () => { 
//     console.log("button+1 is clicked!");
//     a++;
//     console.log(a);
// }


// let bt2= document.querySelector('#bn2');

// let box = document.querySelector('#sat');
// box.onmouseover = () => {
//     console.log("You are inside the Div-box!!!");
//     a++;
//     console.log(`You came inside the div ${a} times.`);
// }



//##Event Object:
// box.onclick = (s) => {
//     console.log(s);
//     console.log(s.type);
//     console.log(s.target);
// }  // instead of using s you can use anything that you want!.


//    ###Event Listners   ; this will not overwrite .
// bt.addEventListener("click",() => {
    //     console.log("button one  is clicked\ntow times!!")
    // });  // now by click once on you first button it will execute three fuction one by one without over-write. 
    
    
    
// bt.addEventListener("click",() => {
//     console.log("button one  is clicked_1!!!")
// });
// bt.addEventListener("click",() => {
//     console.log("button one  is clicked_2!!!")
// });
// bt.addEventListener("click",() => {
//     console.log("button one  is clicked_3!!!")
// });
// bt.addEventListener("click",() => {
//     console.log("button one  is clicked_4!!!")
// });


// bt.removeEventListener("click",() => {

// })

let mode = "light";

let bt = document.querySelector("#sat");
let body = document.querySelector("body");

bt.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        mode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }

    console.log(mode);
});



let bt = document.querySelector("#sat");

bt.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});




