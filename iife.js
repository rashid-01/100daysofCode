/*Create a js library using IIFE */
var counter = (function () {
    var i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            i++
        }
    }
})();

console.log(counter.get()); //0
console.log(counter.set(5));
counter.increment();
console.log(counter.get()); //5