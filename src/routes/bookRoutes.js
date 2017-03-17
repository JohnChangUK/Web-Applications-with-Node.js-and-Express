var express = require('express');

var bookRouter = express.Router();

var router = function(nav) {

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
    res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
            });
});

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books',
            nav: nav,
            book: books[id]
        });
    });
    
    return bookRouter;
}

module.exports = router;