Array.prototype.sum = function() {
   var sum = 0;
  for(var i=0; i<Array.length; i++){
    sum += Array[i]
}
return sum;
}
[1,2,3,4,5].sum();