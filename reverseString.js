// 1.

const a = "this is the test string";

function reverse(str) {
    console.log(str.split('').reverse().join(''));
}
reverse(a);

// 2.

function reverse2(str) {
    console.log([...str].reverse().join(''));
}

reverse2(a);

// 3.

function reverse3(str) {
    let reversed = '';
    for (let i = str.length -1; i>=0; i--){
        reversed = reversed += str[i];
    }
    console.log(reversed);
}
reverse3(a);


// 4.

function reverse4(str) {
    let rev4 = '';
    for (let char of str){
        rev4 = char + rev4;
    }
console.log(rev4);
}
reverse4(a);

// 5.

function reverse5(str) {
    console.log([...str].reduce((acc, char)=> char + acc, ''));
}
reverse5(a);