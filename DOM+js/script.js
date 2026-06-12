// console.dir(window);
// console.dir(document.body);

// let hed = document.querySelector('h1');
// console.log(hed);
// hed.innerText =  hed.innerText + " by Satyendra Kumar!!!";
// console.log(hed);

// let divs = document.querySelectorAll(".box");
// let i = 1 ;


// for (div of divs) {
//     div.innerText = `The unique value of class ${i}.`;
//     i++;

// };



// let div = document.querySelector('div');
// console.log(div);
// // let att = div.getAttribute('class');

// // console.log(att);


// let att = div.setAttribute('class','sat');
// console.log(att);


// let div = document.querySelector('div');
// let i = div.style;
// i.backgroundColor='green';



// ### Inserting an Elements ###
// let div = document.querySelector('div');
// let newB = document.createElement('button');
// newB.innerText="click Me!!!"
// // div.append(newB);
// div.prepend(newB);
// div.before(newB);
// div.after(newB);



// let div = document.querySelector('div');

// let newH = document.createElement('h1');
// newH.innerText = "It me satendra!!!";
// div.after(newH);


// newH.remove();


let newB = document.createElement('button');
newB.innerText="Click Me !!!"
newB.style.backgroundColor="red";
newB.style.color="white";
let bd = document.querySelector('body');
bd.prepend(newB);


let div = document.querySelector('div');
let newP = document.createElement('p');
newP.setAttribute('class','sat');
newP.style.backgroundColor="Pink";
newP.innerText="This is the paragraph that I created now !!!";

div.after(newP);


// Here you have to read about class-list.
