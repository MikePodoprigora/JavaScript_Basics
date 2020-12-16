// Simply return the given input
// myFunction(123) Expected: 123
// myFunction(123) Expected: "123"

// function myFunction( input ) {
//
//     return input
// }

/////////////////////////////////////////

// Find the maximum number of an array
// myFunction([1,2,3])        Expected 3
// myFunction([10,1000,100])  Expected 1000
// myFunction([-10,-2,-11])   Expected -2
//

/*function myFunction( input ) {

    return Math.max(...input);   3 dots is the "Spread" operator
}*/

//////////////////////////////////////////
const a = 10;

function myFunction(a) {
    if (a%2 === 0) {
        return true
    } else{
        return false
    }

}

myFunction();