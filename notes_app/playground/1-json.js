const fs = require("fs");
// const book = {
//   title: "Wings of fire",
//   author: "Abdul kalam"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

let data = JSON.parse(fs.readFileSync("1-json.json").toString());
data.name = "Dhilip";
data["age"] = 26;
const editedData = JSON.stringify(data);
fs.writeFileSync("1-json.json", editedData);
// console.log(editedData);

//
// fs.writeFileSync("1-json.json", editedData);
