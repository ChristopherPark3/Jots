const mongoose = require('mongoose');
const MONGO_URI = ``;
const Schema = mongoose.Schema;

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: ''
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const entrySchema = new Schema({
    entry: {type: 'String', Required: true},
    date: {type: 'Number', default: (new Date())}
})

const Entry = new mongoose.model('entry', entrySchema);

module.exports = Entry;
