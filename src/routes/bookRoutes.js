var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: "Harry Potter",
        genre: "Magic",
        author: "J.K.Rowling",
        read: true
    },
     {
        title: "Harry Trotter",
        genre: "Comedy",
        author: "J.K.Howling",
        read: false
    },
     {
        title: "Harry Mopper",
        genre: "Action",
        author: "J.K.Cowling",
        read: false
    }
];

bookRouter.route('/')
    .get(function(req, res) {
    res.render('books', {
            title: "Books", 
            nav: [{
                Link: '/Books', 
                Text: 'Books'
            }, {
                Link: '/Authors', 
                Text: 'Authors'
            }],
            books: books
            });
})

bookRouter.route('/single')
    .get(function(req, res) {
    res.send('Hello Single Book');
});

module.exports = bookRouter;