


// Arrays in JavaScripts 
//it is similar to lists in python .
/*
let fruits = ["Apple","Banana","Orange"];
let empty = [] ; //this is an empty array.
let mixed = [1 ,"hello",true] ;

console.log(fruits[0]);
let i = 1 ;
for (fruit of fruits) {
    console.log(i+". "+fruit);
    i++;
}

for (i=0 ; i < fruits.length; i++) {
    console.log(`${i+1}. ${fruits[i]}`);
}

fruits.forEach(function(sat) {
    console.log(i+". "+sat);
    i++;
});
/*

/*

//      ### Methods of Arrays in JavaScript ###
// Sample Array
let arr = [1, 2, 3, 4, 5];

// 1. push() → Add element at end
arr.push(6);
// Output: [1, 2, 3, 4, 5, 6]

// 2. pop() → Remove last element
arr.pop();
// Output: 6
// Array: [1, 2, 3, 4, 5]

// 3. unshift() → Add element at beginning
arr.unshift(0);
// Output: [0, 1, 2, 3, 4, 5]

// 4. shift() → Remove first element
arr.shift();
// Output: 0
// Array: [1, 2, 3, 4, 5]

// 5. length → Number of elements
arr.length;
// Output: 5

// 6. indexOf() → First index of value
arr.indexOf(3);
// Output: 2

// 7. lastIndexOf() → Last index of value
[1, 2, 3, 2].lastIndexOf(2);
// Output: 3

// 8. includes() → Check existence
arr.includes(4);
// Output: true

// 9. concat() → Merge arrays
arr.concat([6, 7]);
// Output: [1,2,3,4,5,6,7]

// 10. join() → Array to string
arr.join("-");
// Output: "1-2-3-4-5"

// 11. reverse() → Reverse array
arr.reverse();
// Output: [5,4,3,2,1]

// 12. sort() → Sort array
[5,1,4,2].sort();
// Output: [1,2,4,5]

// Numeric sort
[10, 2, 5].sort((a,b)=>a-b);
// Output: [2,5,10]

// 13. slice(start,end) → Extract portion
arr.slice(1,4);
// Output: [2,3,4]

// 14. splice(start,count,...items)
// Remove/Add elements
let nums = [1,2,3,4];
nums.splice(1,2);
// Output: [2,3]
// Array: [1,4]

// 15. at(index) → Access element
arr.at(2);
// Output: 3

// Negative indexing
arr.at(-1);
// Output: 5

// 16. fill(value)
[1,2,3].fill(0);
// Output: [0,0,0]

// 17. flat() → Flatten nested arrays
[1,[2,[3]]].flat(2);
// Output: [1,2,3]

// 18. Array.isArray()
Array.isArray(arr);
// Output: true

// 19. toString()
arr.toString();
// Output: "1,2,3,4,5"

let arr = [1,2,3,4,5];

// 20. forEach() → Run function on each element
arr.forEach(x => console.log(x));
// Output:
// 1
// 2
// 3
// 4
// 5

// 21. map() → Transform elements
arr.map(x => x * 2);
// Output: [2,4,6,8,10]

// 22. filter() → Keep matching elements
arr.filter(x => x % 2 === 0);
// Output: [2,4]

// 23. find() → First matching element
arr.find(x => x > 3);
// Output: 4

// 24. findIndex() → Index of first match
arr.findIndex(x => x > 3);
// Output: 3

// 25. some() → Any match?
arr.some(x => x > 4);
// Output: true

// 26. every() → All match?
arr.every(x => x > 0);
// Output: true

// 27. reduce() → Reduce to one value
arr.reduce((sum, x) => sum + x, 0);
// Output: 15

*/

// let marks = [44,53,64,75,75];
// let sum = 0 ;
// for (let mark of marks) {
//     sum += mark;
// }
    
// console.log(`Average marks: ${sum/marks.length}`)


// let  items = [250,645,300,900,50]

// for (let i = 1 ; i <=items.length; i++) {
//     items[i-1] = items[i-1] - (items[i-1]/10);
// }

// console.log(`Final Prices of the 5 items:\n${items}`)






