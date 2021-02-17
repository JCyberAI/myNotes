const util = require("util");
const fs = require("fs");
//const uuid = require("uuid");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


class Note {

    read() {

        return readFile("db/db.json", "utf8")

    }

    write(note) {

        return writeFile("db/db.json", JSON.stringify(note));

    }

    getNotes() {

        return this.read().then((notes) => {

            let myNotes
            try{

                myNotes = [].concat(JSON.parse(notes))

            } catch (err){

                myNotes = []

            }
            return myNotes
        })

    }

    addNote(note) {

        const {text, title} = note
        const newNote = {text, title}
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)

    }

    removeNote(id) {

        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))

    }
}

module.exports = new Note()