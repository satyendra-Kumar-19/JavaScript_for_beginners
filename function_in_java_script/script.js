// function square(num) {
//     return num**2 ;
// }

// let s = square(78);
// console.log(s);


// function hello(name) {
//     return `🤷‍♂️ Hello ${name}`;
// }

// let x = hello("Satyendra");
// console.log(x);

// //Function Expression
// //A function can be stored in a variable .
// const greet = function(nam) {
//     return "hello "+nam;

// }
// let y = greet("Satyendra Kumar");
// console.log(y);

// //Arrow function 
// //Modern JavaScript commonly uses arrow functions.
// const add = (a, b) => {
//     return a + b;
// }

// // Short Arrow Function
// // If there is only one statement:
// // const add = (a ,b) =>  a + b ;


// const isEven = (num) => num%2===0 ;
 
// let ev = isEven(3);
// console.log(ev)

// ----------------------------------------------------------------------

// const sq = (num) => num**2;
// let squ = sq(3);
// console.log(squ);

// Scope Inside Functions
// Variables created inside a function are local.

// function test() {
//     let x = 10;
//     console.log(x); 
// }
// // console.log(x);  it will raise error because x is one work for the function.
// console.log(test());

// // Default Parameters
// function greet(nam = "satya") {
//     return "Hello "+ nam ;
// }
// let x = greet();
// let y = greet("Satyendra!!!");
// console.log(x);
// console.log(y);
 

// forEach, map ,filter and reduce

// let fruits = ["Apple","Mango","Banana","Payaya"];
// fruits.forEach(function(fruit,i) {
//     console.log(i,fruit);
// });

// // numbers.forEach(function(num) {
//     //     console.log(num);
//     // });
    
// const printNum= (num) =>  console.log(num);
// let numbers = [10,20,30];
// numbers.forEach(printNum);


// let nums = [5, 10, 15];
// nums.forEach((val) => console.log(val));

// let nums = [10, 20, 30];

// nums.forEach((value, index, arr) => {
//     console.log(value);
//     console.log(arr);
// });
// let students = ["Rahul", "Aman", "Riya"];

// students.forEach((name, index, array) => {
//     console.log(
//         `Index: ${index}, Name: ${name}`
//     );
// });


// let nums = [10, 20 ,30];
// let sum = 0;
// nums.forEach((val) => {
//     sum += val;
// })

// console.log(sum);

let users = [
    {name: "Rahul", age: 20},
    {name: "Aman", age: 22},
    {name: "Riya", age: 19}
];

users.forEach(user => {
    console.log(user.name);
});

let nums = [1, 2, 3];
nums.forEach((nums,index,arr) => {
    arr[index] = num * 10;
});
console.log(nums);



