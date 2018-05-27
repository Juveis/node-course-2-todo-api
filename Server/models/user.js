var User = mongoose.model('User', {
    email:{
        type:String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
    email: 'fortizcastillo@hotmail.com'
});

user.save().then((doc) => {
    console.log('User saved', doc);
}).catch((e) => {
    console.log('Unable to save user', e);
});