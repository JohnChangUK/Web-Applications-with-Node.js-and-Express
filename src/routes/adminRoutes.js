var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: "Harry Potter",
        genre: "Magic",
        author: "J.K.Rowling",
        bookId: 3,
        read: true
    },
     {
        title: "Holes",
        genre: "Comedy",
        author: "Louis Sachar",
        bookId: 38709,
        read: true
    },
     {
        title: "You Don't Know Js: This & Object Prototypes",
        genre: "Action",
        author: "Kyle Simpson",
        bookId: 22221108,
        read: true
    }
];

var router = function(nav) {

    adminRouter.route('/addBooks')
      .get(function(req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';

      mongodb.connect(url, function(err, db) {
        var collection = db.collection('books');
          collection.insertMany(books, 
            function(err, results) {
              res.send(results);
              db.close();
        }
        );

      });

      //res.send('inserting books');
    });

    return adminRouter;
}

module.exports = router;