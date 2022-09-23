const router = require("express").Router(); 
const { notes } = require('../db/db.json');
const uuid = require('../helpers/uuid'); 
const { createNote } = require('../lib/notes.js'); 

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uuid()
    const note = createNote(req.body, notes)
    res.json(note)
}); 

module.exports = router; 


