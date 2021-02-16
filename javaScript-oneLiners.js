/*Get A Random Boolean value(true/false) */
const randomBoolean = () => Math.random() >= 1;
console.log(randomBoolean())

/*Check if the provided day is a weekday */
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(new Date(2021, 01, 11))

/*Reverse a string */
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("Hello world"))

/*Check if the current tab is in view / focus */
const isBrowserTabInView = () => document.hidden;
isBrowserTabInView(); //true or false

/*Check if a number is even or odd */
const isEven = (num) => num % 2 === 0;
console.log(isEven(4)) //true or false

/*Get the time from a date */
const timeFromDate = (date) => date.toTimeString().slice(0, 8);
console.log(timeFromDate(2021, 0, 11, 17, 30, 0)) //17:30:00

/*Truncate a number to a fixed decimal point */
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / (Math.pow(10, fixed));
console.log(toFixed(24.13564773, 2)) //24.13

/*Check if an element is currently in focus */
const elementIsInFocus = (el) => el === document.activeElement;
console.log(elementIsInFocus()) //true or false

/*Check if the current user has touch events supported */
const isTouchSupported = () => {
    'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch
}
console.log(isTouchSupported()) //true or false

/*Check if the current user is on an Apple device */
const isAppleDevice = () => /Mac|iPad|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice()) //true or false

/*Scroll to top of the page */
const goUp = () => window.scrollTo(0, 0);
console.log(goUp());

/*Get average value of arguments */
const averageNum = (...args) => args.reduce((a, b) => (a + b)) / args.length;
console.log(1, 2, 3, 4)

/*Convert Fahrenheit / Celsius */
const celciusToFahrenheit = (celcius) => celcius * 9 / 5 + 32;
const FahrenheitToCelcius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
console.log(celciusToFahrenheit(59));
console.log(FahrenheitToCelcius(67))

/*Make a webpage editable */
document.body.contentEditable(true);

/*Prevent an Object to add/modify it's property */
Object.freeze(objectName);
//For example
let profile = {
    name:'Rashid'
}
Object.freeze(profile);
profile.name = 'Ashraf'; //Not allowed
profile.age = 26; //Not allowed

//Only modify properties and preventing to add another properties
Object.seal(profile)

/*Add/modify only some property of an object */
Object.defineProperty(profile, 'age', {
    value: 26,
    writable: false
}) //This adds a new property into the object and makes it read-only
profile.name = 'Ashraf'; //Value of name will be changed
profile.age = 29 //value of age will not changed

console.log(Math.max()) //-infinity //Math.max() always compares any no. with 1 and -infinity is the lowest no. in maths.