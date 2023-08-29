//iterator function
const countToTen = (num = 1) => {
    while(num <= 10){
        console.log(num);
        num++;
    }
}

// countToTen();

//    recursive functions have 2 parts:
// 1) the recursive call to the function
// 2) at least one condition to exit
// 3) Increase Readability

    // const recurToTen =  (num = 1) => {
    //     if(num > 10) return;
    //     console.log(num);
    //     num++;
    //     recurToTen(num)
    // }

    // recurToTen()


//    Reasons to NOT use Recurson
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?


// The standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc...

//Without Recursion:
// const fibonacci = (num, array = [0, 1]) => {
//     while(num > 2){
//         const [nextToLast, last] = array.slice(-2);
//         array.push(nextToLast + last);
//         num -= 1;
//     }

//     return array;
// }

// fibonacci(12);

let fruits = ["Apple", "Mango", "Orange", "Strawberry", "Papaya"];
let selectedFruits = fruits.slice(1,1)

console.log(selectedFruits)