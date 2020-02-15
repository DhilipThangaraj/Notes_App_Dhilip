const chalk = require("chalk");
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
    notes.addNote(argv.title, argv.body);
  }
});

//Remove note

yargs.command({
  command: "remove",
  describe: "Removing the note",
  builder: {
    title: {
      describe: "Remove Note_Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//List note

yargs.command({
  command: "list",
  describe: "List the note",
  handler() {
    console.log(chalk.inverse("Your Notes ::"));
    notes.listNotes();
  }
});

//Read note
yargs.command({
  command: "read",
  describe: "Read the comment",
  builder: {
    title: {
      describe: "Read the title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
});

console.log(yargs.parse());
