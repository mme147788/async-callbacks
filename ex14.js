// Exercise 14: Countdown with Random Delay
// Goal: countdown from 3 to 0 with a random delay between 500ms and 1500ms per number.
// Required: setTimeout(callback, delay), Math.random()
// - use recursive or nested callbacks with setTimeout (no loops)
// - for each step compute a NEW delay:
//     const delay = 500 + Math.random() * 1000;
//
// Expected output:
//   3
//   (wait random time)
//   2
//   (wait random time)
//   1
//   (wait random time)
//   0
//   Done!
//
// Run: node ex14.js

// write your code here

let delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

console.log(`3`)

setTimeout(() => {
    delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    console.log(`2`)
    setTimeout(() => {
        delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        console.log(`1`)
        setTimeout(() => {
            delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
            console.log(`0`)
            setTimeout(() => {
                delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
                console.log(`Done!`)
            })
        }, delay)
    }, delay)
}, delay)