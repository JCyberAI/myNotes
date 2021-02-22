const router = require("express").router();
const note = require("../db/note");

router.get("/notes", (req, res) => {

    note.getNotes()
    .then((notes) => {

        return res.json(notes)

    }).catch((err) => res.status(500).json(err))  

})

router.post("/notes", (req, res) => {

    note.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))

})

router.delete("/notes/:id", (req, res) => {

    note.removeNote(req.params.id)
    .then(() => res.json({ok : true}))
    .catch((err) => res.status(500).json(err))

})

module.exports = router