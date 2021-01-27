//using reverse() Method
function reverseArray(input) {
    return input.reverse()
}
console.log(reverseArray([1,2,3,4,5]))

//without using reverse() method
function reverseArray(input) {
    var arr = new Array;
    for(var i=input.length-1; i>=0; i--){
        arr.push(input[i])
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]))

//By swapping Method
const reverseArray = (input) => {
    var i=0;
    var j=input.length-1;
    while(i<j){
        const temp = input[i];
        input[i++] = input[j];
        input[j--] = temp;
    }
}
console.log(reverseArray([1,2,3,4,5]))

//using .map Method
const reverseArray = (input) => {
    let arrLen = input.length-1;
    return input.map(() => input[arrLen--])
}
console.log(reverseArray([1,2,3,4,5]))

//Reverse elements of an Array upto given number
//using Swap method
const reverseArray = (arr, k) => {
    for(var i=0; i<k/2; i++){
        const temp = arr[i];
        arr[i] = arr[k-i-1];
        arr[k-i-1] = temp;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5],3))
