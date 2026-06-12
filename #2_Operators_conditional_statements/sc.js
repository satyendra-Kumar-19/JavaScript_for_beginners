
// alert('this the website where use  can learn java scripts .')
// console.log("Hello Everybody,what's going on ??")


//Arithematic operators .

// let a = 15;
// let b = 7;

// console.log('a + b =',a+b)
// console.log('a - b =',a-b)
// console.log('a * b =',a*b)
// console.log('a / b =',a/b)

// console.log("floor division of a and b",Math.floor(a/b))

// // increment and decrement operator
// console.log('++a',++a)  //preincrement
// console.log('a++',a++)  //postincrement
// console.log('--a',--a)  //predecrement
// console.log('a--',a--)  //postdecrement



// Asignment operators 
//  = , += , -= , *= , /= and so on ...
// you can also use modulo and exponential operators .
// let x = 5 ; 
// console.log('x',x)
// console.log('x += 3 ',x += 3)
// console.log('x -= 3 ',x -= 3)
// console.log('x *= 3 ',x *= 3)
// console.log('x /= 2 ',x /= 2)
// console.log('x **= 2 ',x **= 2)
// console.log('x %= 2 ',x %= 2)

// we can also use floor division.

// comparision Operators :- it returns a boolean value.
// ==  ;  !=  ;  ===  ;  !==  ;  >  ;   >=   ;   <   ;   <= 

// == converts into same datatype before comparision.
// 5=='5' is True  ,while  5==='5' is False.

// console.log('5!="5"',5!='5')
// console.log('5=="5"',5=='5')
// console.log('5!=="5"',5!=='5')
// console.log('5==="5"',5==='5')
// console.log('6 < 3',6<3)
// console.log('6 <= 3',6<=3)
// console.log('6 > 3',6>3)
// console.log('6 >= 3',6>=3)



//Logical Operators  (   &&=and  ,||=or     !=not   ) also returns the boolean value.




// Conditional Statement (if ....)


// let mode = 'dark';
// let color;

// if (mode = 'dark') {
//     color = 'black';
// } else {
//     color = 'white';
// }

// console.log(color)


// let num = 6;

// if (num % 2 === 0) {
//     console.log('The number is an Even number!')
// } else {
//     console.log("The number is an odd number!! ")
// }



let age = 18;  // you can change this value to test

if (age < 18) {
    console.log("Not eligible for vote.");
} else if (age === 18) {
    console.log("You are 18 and eligible for vote");
} else {
    console.log("You are able to vote!");
}







// Ternary operator
age < 18 ? console.log('child'): console.log('adult');







// YOU can read MDN



//usecase of switch statement.  Is any condition matches it runs all the codes below if we don't use break statement.

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1



//Input ==prompt here in js

// let  num = prompt('Enter a number: ')

// if (num%5===0) {
//     console.log('The Number is a multiple of 5.')

// } else ( console.log('The Number is not a multiple of 5.'))



let score = Number(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
    console.log("You got grade 'A'.");
} else if (score >= 70 && score <= 79) {
    console.log("You got grade 'B'.");
} else if (score >= 60 && score <= 69) {
    console.log("You got grade 'C'.");
} else if (score >= 50 && score <= 59) {
    console.log("You got grade 'D'.");
} else {
    console.log("You got grade 'F'.");
}





