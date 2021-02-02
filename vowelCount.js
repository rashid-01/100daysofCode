function getCount(str){
    var vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str){
        if(vowels.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
}
getCount('rashid')