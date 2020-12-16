// To find the word among the string

const string = "the quick brown fox jumps over the lazy dog";
const word = "quick";
function sub(str){
    // console.log(str.indexOf(word) !== -1);
    console.log(str.includes(word));
}

sub(string);


