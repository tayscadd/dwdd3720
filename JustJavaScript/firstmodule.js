
let a = 10
let b = a
a = 0
// What is B equal to? 10.

// Primative Values.
console.log(2);
console.log("hello");
console.log(undefined);
// They get printed as 2, hello, and undefined

// These are objects.
console.log({});
console.log([]);
console.log(x => x * 2);
// The first get's displayed as an object. The second gets displayed as an Array (NOT a list!?). The third just shows the function.

// There are 9 different types of values.

let primativeValues = {   
    STRINGS : "Text",
    UNDEFINED : "UNINTENTIIONAL missing values",
    NULL : "INTENTIONALLY missing values",
    BOOLEAN : "true or false, logical operations",
    NUMBER : "103, 8.23, numbers for mathamtical operations",
    BIGINT : "Uncommon, and new, type for very large numbers in mathatical operations",
    SYMBOLS : "Uncommon, used for 'rituals' or hide secrets."
}

let objectsAndFunctions = {
    OBJECTS : 'Anything with {}. Groups together related code. Technically, Functions are a type of object.',
    FUNCTIONS : "x = x * 2, used to refer to code."
}

let pvalueNotes = "THERE ARE NO OTHER TYPES. Arrays are just a type of object. Lists are a type of object, as well as Dates, and more. "
let pvaluePS = "Note that NOT EVERYTHING is an object. Primative values are not objects. Functions that work on them are, in reality, just temporary made into objects to change their value."

console.log(typeof({})); // "object"
console.log(typeof([])); // "object"
console.log(typeof(x => x * 2)); // "function"

////
let reaction = 'yikes';
reaction[0] = 'l';
// First, with recation[0], it has to convert it to a list, It'll take each part of the string and make them [y,i,k,e,s]
// Then, with the 0, it will pull the first one and change it to l. 
// It will then turn the var recation back into a string using the list, so it'd be equal to 'likes.
console.log(reaction);

// I WAS WRONG. YOU CAN'T CHANGE primative values. so no matter what you do to it, it will still be yikes.