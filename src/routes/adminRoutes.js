var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

      res.send('inserting books');
    });

    return adminRouter;
}

module.exports = router;