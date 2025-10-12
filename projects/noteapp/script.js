const button = document.getElementById('btn');
const app = document.getElementById('app');

getNotes().forEach((note) => {
  const noteEl = createNote(note.id, note.content);
  app.insertBefore(noteEl, button);
});

function createNote(id, content) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener('dblclick', () => {
    const warning = confirm("Are you sure you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNotes(notes);
  app.removeChild(element);
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.find((note) => note.id == id);
  target.content = content;
  saveNotes(notes);
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNote(noteObj.id, noteObj.content);
  app.insertBefore(noteEl, button);
  notes.push(noteObj);
  saveNotes(notes);
}

function saveNotes(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

button.addEventListener('click', addNote);
