var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

newTodo.save().then((doc) => {
    console.log('Save todo:', doc);
}, (err) => {
    console.log('Unable to save todo, ', err);
});

