const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find(note => {
    return note.title === title;
  });

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New notes has been added successfuly");
  } else {
    console.log("Note title already taken!!");
  }
};

const saveNotes = notesData => {
  const dataJSON = JSON.stringify(notesData);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    console.log("dataBuffer", dataBuffer.toString());
    const dataJSON = dataBuffer.toString();
    console.log("*********", JSON.parse(dataJSON));
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = removeTitle => {
  const notesData = loadNotes();
  const removedNotesData = notesData.filter(note => {
    return note.title !== removeTitle;
  });
  if (notesData.length !== removedNotesData.length) {
    saveNotes(removedNotesData);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const listNotes = () => {
  const notesList = loadNotes();
  notesList.map(note => console.log(chalk.blue(note.title)));
};

const readNotes = title => {
  const notesRead = loadNotes();
  const note = notesRead.find(note => note.title === title);
  if (note) {
    console.log("Your read is.........");
    console.log("Title ::::: ", chalk.inverse(note.title));
    console.log("Body :::::: ", note.body);
  } else {
    console.log(chalk.inverse.red("Your search read is incorrect"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
