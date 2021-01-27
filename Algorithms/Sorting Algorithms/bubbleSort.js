function swapNumbers(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function bubbleSort(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=1; j<arr.length; j++){
            if(arr[j-1] > arr[j]){
                swapNumbers(arr, j-1, j)
            }
        }
    }
    return arr;
}
bubbleSort([44,10,12,34,78,23,45,9,56])