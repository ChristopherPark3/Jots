const express = require('express');
const app = express();
const mongoose =  require('mongoose')
const path = require('path')
const PORT = 3000;

const entryRouter = require('./Routes/entryRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, '../build/index.html')));

app.get('bundle.js', (req, res, next) => {
    res.status(200).sendFile(path.resolve(__dirname, '..build/bundle.js'));
});

app.use('/Entries', entryRouter);
app.use((req, res, next) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
})

app.use((req, res) => {
    res.status(404).send('This is not the page you\'re looking for')
})
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));