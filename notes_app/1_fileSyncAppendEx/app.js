const fs = require("fs");
// fs.writeFileSync("notes.txt", "Welcome to the node js world");

//challenge1
fs.appendFileSync("notes.txt", "This is appended text");
