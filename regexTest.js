// Exploring Regex Patterns in a JavaScript File

// String to search through
let str = '"A Walk in the Woods" (January 11, 1983)';
// Regex patterns
let paintingTitle = /"([^"]*)"/;
let date = /\(([^ ]*)/ ;
let titleResult = str.match(paintingTitle);
let dateResult = str.match(date);

console.log(titleResult[1]);
console.log(dateResult[1]);
