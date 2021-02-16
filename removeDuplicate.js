/*Using BruteForce Algo */

function removeDuplicate(arr) {
    let newArr = [];
    let len = arr.length;
    for (let i = 0; i < len; i++){
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
removeDuplicate([7, 3, 4, 3, 9, 5, 7])

/*Finding unique value method and sorted array */
function removeDuplicate(arr) {
    let obj = {}
    for (let i of arr) {
        obj[i] = arr
    }
    let newArr = Object.keys(obj)
    return newArr;
}

/*One line method */
let arr = [7, 3, 4, 3, 9, 5, 7]
console.log(...new Set(arr))