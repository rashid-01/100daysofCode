//filter()
function usingFilter(arr, toBeFind) {
    const filteredArray = arr.filter(element => element>toBeFind)
    return filteredArray;
}
console.log(usingFilter([1,2,3,4,5],3)) //Returns All elements that are greater than 3

//map()
function usingMap(arr, toBeFind) {
    const array = arr.map(i => i>=toBeFind)
    return array
}
console.log(usingMap([1,2,3,4,5],3)) //Returns true for all elements that are greater than 3

//find()
function usingFind(arr, toBeFind) {
    const array = arr.find(element => element>toBeFind)
    return array;
}
console.log(usingFind([1,2,3,4,5],3)) //Returns first element that is greater than 3

//for Loop
function usingForLoop(arr){
    let isPresent = false;
    for(let item of arr){
        if(item === 3){
            isPresent = true;
        } else {
            isPresent = false
        }
    }
    return isPresent;
}
usingForLoop([1,2,3,4,5]) //Returns true if given number is in that array

//includes()
function usingIncludes(arr, toBeFind){
    const array = arr.includes(toBeFind)
    return array;
}
console.log(usingIncludes([1,2,3,4,5],5)) //Returns true if given number is in that array

//indexOf()
function usingIndexOf(arr, toBeFind){
    const array = arr.indexOf(toBeFind)
    return array
}
console.log(usingIndexOf([1,2,3,4,5],4)) //Returns index of the given element in that array

//findIndex()
function usingFindIndex(arr, toBeFind){
    const array = arr.findIndex(i => i > toBeFind)
    return array;
}
console.log(usingFindIndex([1,2,3,4,5],3)) //Returns index of first element that passed the given condition

