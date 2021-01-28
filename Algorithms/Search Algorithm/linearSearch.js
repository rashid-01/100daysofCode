function linearSearch(arr, value){
    for(var i=0; i<arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

linearSearch([89, 56, 77, 9, 45,63,43, 84], 63)