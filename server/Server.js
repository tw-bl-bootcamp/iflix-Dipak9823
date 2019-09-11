const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;
const server = app.listen(port, () => {
    console.log("Connect to the port number:", port);
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/iFlix", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error in Connection", err);
})

module.exports = app;
