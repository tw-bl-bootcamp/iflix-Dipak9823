const routes=require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressvalidator=require('express-validator');
const express = require('express');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressvalidator());
app.use('/',routes);

const port = 3000;
const server = app.listen(port, () => {
    console.log("Connect to the port number:", port);
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/iFlix", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((db) => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error in Connection", err);
})

module.exports=app;