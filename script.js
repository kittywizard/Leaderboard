//you will get numbers and names some other way 

let input1 = {
    username : "Mel",
    wordCount : 10000
}

let input2 = {
    username : "Keri",
    wordCount : 10000000
}

let input3 = {
    username : "Tatra",
    wordCount : 25000
}
let testArray = [["Mel", 10000], ["Keri", 100000], ["Tatra", 250000]];


//want to sort the array by position 1, not 0\

function countThem(a,b){
    return b-a;
}


// let wordCounts = [100, 10340, 4305240, 300];


// console.log(wordCounts.sort(function(a, b) {
//     return b-a;
// }));