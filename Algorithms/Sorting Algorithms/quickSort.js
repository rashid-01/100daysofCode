function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    } else {
        var left = [];
        var right = [];
        var newArr = [];
        var pivot = arr.pop();

        for(var i=0; i< arr.length; i++){
            if(arr[i] <= pivot){
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        return newArr.concat(quickSort(left), pivot, quickSort(right))
    }
}

quickSort([4,7,89,3,5,76,8])