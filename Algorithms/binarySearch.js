//Binary search only works with sorted arrays
function binarySearch (arr, target){
    const startIndex = 0;
    const endIndex = arr.length-1;

    while(startIndex <= endIndex){
        const middleIndex = Math.floor((startIndex + endIndex)/2)

        if(target === arr[middleIndex]){
            console.log('Target value was found at index' + middleIndex)
            return middleIndex;
        }

        if(target > arr[middleIndex]){
            console.log("Searching the right side of Array")
            startIndex = middleIndex + 1;
            return startIndex
        }

        if(target < arr[middleIndex]){
            console.log("Searching the left side of Array")
            endIndex = middleIndex - 1;
            return endIndex
        } else {
            console.log("Target value did not find in this loop iteration. Looking for another iteration.")
        }
    }
    console.log("Target value did not find in the given array!")
}
binarySearch([10, 20,50,56, 47, 34, 67, 44, 87, 98], 47)