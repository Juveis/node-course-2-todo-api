var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};


/*
var newTodo = new Todo({
    text: 'Cook Dinner',
    completed: false,
    completedAt: 12
});

newTodo.save().then((doc) => {
    console.log('Save todo:', doc);
}, (err) => {
    console.log('Unable to save todo, ', err);
});
*/