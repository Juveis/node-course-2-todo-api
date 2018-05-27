var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        res.status(200).send(doc);
        console.log('Todo save nitido --> ', doc);
    }, e => {
        res.status(400).send(e);
    }).catch(e => {
        console.log('Unexpected error', e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});