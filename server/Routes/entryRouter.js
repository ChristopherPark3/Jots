const express = require("express");
const entryController = require("../Controller/entryController")
const router = express.Router();

router.get('/', entryController.getEntries, (req, res) => {
    res.status(200).json(res.locals.allEntries)
})

router.post('/', entryController.createEntry, (req, res) => {
    // console.log(res.locals.newEntry)
    res.status(200).json(res.locals.newEntry);
})

module.exports = router;