// We want to go with the Normal functions and convert it to the Arrow functions

//normal function:
function sum(a, b) {
    return a + b
}
//Arrow function:
let sum2 = (a, b) => {
    return a + b
}

//////////////////////////////////////////

function isPositive(number) {
    return number >=0
}

function randomNumber() {
    return Math.random()
}

document.addEventListener('click', function () {
    console.log('click')
})