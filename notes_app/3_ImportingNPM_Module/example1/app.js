const validator = require("validator");
const printNotes = require("./notes");

const yourNotes = printNotes("This is my notes, i learned from Andrew");

console.log(yourNotes);

console.log(validator.isEmail("dhilipThangarajgmail.com"));
console.log("isURL ?", validator.isURL("https://www.google.com"));
console.log("isPostalCode ? ", validator.isPostalCode("560011", "AU"));
