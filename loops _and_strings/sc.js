//Loops in js 

// 1st is for loop 
/*
for(let i = 1 ;i <=5 ;i++) {
    console.log(i);
}


for(let i = 1 ;i <=5 ;i++) {
    console.log(i+'.Satyendra Kumar');
}


for(let i = 5; i >= 1; i--) {
    console.log(i);
}
for(let i = 2; i <= 10; i += 2) {
    console.log(i);
}
*/
// for(let i = 1 ; i<= 10 ; i++) {
//     console.log('5 X '+i,'=',5*i)
// }


// While loop 

// let i = 1;

// while(i <= 1000) {
//     console.log("Name is Satyendra!!!");
//     i++;
// }




// 3rd is do ... while loop .
// let i = 1;

// do {
//     console.log('Satyendra');
//     i++;
// } while(i <=5);


// 4th is for...of Loop

// const fruits = ["Apple","Banana","Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// for (let i=0 ;i<fruits.length;i++) {
//     console.log(fruits[i])
// }


// const sat = "Satyendra Kumar" ;
// for (let ch of sat) {
//     console.log(ch);
// }



//5th is for...in Loop
// const student = {
//     name:'satyendra Kumar',
//     age:21,
//     city:"Siwan"
// };

// for (let key in student) {
//     console.log(key,':',student[key]);
// }


// const fruits = ["Apple", "Banana", "Mango"];

// for (let index in fruits) {
//     console.log(index);
// }
// for (let fruit of fruits) {
//     console.log(fruit);
// }


// const arr = ["A", "B", "C"];

// for (let x in arr) {
//     console.log(x);
// }

// for (let x of arr) {
//     console.log(x);
// }


// let gameNum = 5;

// let num = Number(prompt("Enter a number"));

// while (num !== gameNum) {
//     num = Number(prompt("Enter another number"));
// }

// console.log("Matched");
// console.log("Game Over!!!");


//Template strings 
// let obj = {
//     nam:"satyendra",
//     gaw:"Lakri"
// }
// let output =   `My name is ${obj.nam} and my village name is ${obj.gaw}.`
// console.log(output)

// console.log("Satyendra\nKumar")  //it prints the text in another line .
// console.log("Satyendra\tKumar")  // it prints the text with the distance of a tab.


//String Methods in JavaScript
// 1. length → Number of characters
"Hello".length
// Output: 5

// 2. toUpperCase() → Convert to uppercase
"hello".toUpperCase()
// Output: "HELLO"

// 3. toLowerCase() → Convert to lowercase
"HELLO".toLowerCase()
// Output: "hello"

// 4. trim() → Remove spaces from both ends
"  Hello  ".trim()
// Output: "Hello"

// 5. slice(start, end) → Extract part of string
"JavaScript".slice(0, 4)
// Output: "Java"

// 6. substring(start, end) → Extract part of string
"JavaScript".substring(0, 4)
// Output: "Java"

// 7. replace(old, new) → Replace first occurrence
"I like Java".replace("Java", "Python")
// Output: "I like Python"

// 8. replaceAll(old, new) → Replace all occurrences
"cat dog cat".replaceAll("cat", "lion")
// Output: "lion dog lion"

// 9. includes(value) → Check if string contains value
"JavaScript".includes("Script")
// Output: true

// 10. startsWith(value) → Check beginning of string
"JavaScript".startsWith("Java")
// Output: true

// 11. endsWith(value) → Check end of string
"JavaScript".endsWith("Script")
// Output: true

// 12. indexOf(value) → First occurrence index
"Hello World".indexOf("o")
// Output: 4

// 13. lastIndexOf(value) → Last occurrence index
"banana".lastIndexOf("a")
// Output: 5

// 14. charAt(index) → Character at index
"Hello".charAt(1)
// Output: "e"

// 15. concat() → Join strings
"Hello".concat(" ", "World")
// Output: "Hello World"

// 16. split(separator) → Convert string to array
"apple,banana,mango".split(",")
// Output: ["apple", "banana", "mango"]

// 17. repeat(n) → Repeat string n times
"Hi ".repeat(3)
// Output: "Hi Hi Hi "

// 18. padStart(length, char) → Add chars at beginning
"5".padStart(3, "0")
// Output: "005"

// 19. padEnd(length, char) → Add chars at end
"5".padEnd(3, "0")
// Output: "500"



