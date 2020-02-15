const yargs = require("yargs");
const notes = require("./notes.js");

//add a note
yargs.command({
  command: "add",
  describe: "Add the title and body",
  builder: {
    title: {
      describe: "Add Note_title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Add note body",
      demandOption: true,
      type: "string"
    }
  },

  handler(argv) {
    console.log("Adding a note....title", argv.title);
    console.log("Adding a note....body", argv.body);
  }
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler() {
    console.log("Removing a note from function");
  }
});

//List the note
yargs.command({
  command: "list",
  describe: "List the note",
  handler() {
    console.log("List the command from function");
  }
});

//Read the note
yargs.command({
  command: "read",
  describe: "Read the note",
  handler() {
    console.log("Read the command from function");
  }
});

console.log(yargs.argv);
