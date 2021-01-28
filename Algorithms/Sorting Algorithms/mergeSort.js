function mergeSort(leftPart, rightPart){
    var i=0;
    var j=0;
    var results = []

    while(i < leftPart.length || j < rightPart.length){
        if(i === leftPart.length){
            results.push(rightPart[j]);
            j++;
        } else if(j === rightPart.length || leftPart[i] <= rightPart[j]){
            results.push(leftPart[i]);
            i++;
        } else {
            results.push(rightPart[j]);
            j++;
        }
    }
    return results;
}

mergeSort([1,9,6],[7,5,9])