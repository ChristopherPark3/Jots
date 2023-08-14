const models = require("../Models/entryModel");
const mongoose = require('mongoose');

const entryController = {};
entryController.getEntries = (req, res, next) => {
    models.find()
        .then(data => {
            res.locals.allEntries = data
            return next()
        })
        .catch(err => {
            return next({err: "Error occurred in entryController.getEntries"})
        })

}
entryController.createEntry = (req, res, next) => {
    const { entry } = req.body;
    models.create({entry: entry})
        .then(data => {
            res.locals.newEntry = data;
            return next();
        })
        .catch(err => {
            return next({err: "Error occurred in entryController.createEntry"})
        })


}

module.exports = entryController;