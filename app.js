var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

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

app.use('/Books', bookRouter);

app.get('/', function(req, res) {
        res.render('index', {
            title: "Hello from render", 
            nav: [{
                Link: '/Books', 
                Text: 'Books'
            }, {
                Link: '/Authors', Text: 'Authors'}] 
            });
});

app.get('/books', function(req, res) {
    res.send('Hello Books!');
});

app.listen(port, function(err) {
    console.log('running server on port' + port);
});