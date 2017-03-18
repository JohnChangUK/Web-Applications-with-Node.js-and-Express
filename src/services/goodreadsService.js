var http = require('http');
var xml2js = require('xml2js');


var goodreadsService = function() {

    var getBookById = function(id, cb) {
      cb(null, {
        description: "Our description"
      });
    };

    return {
      getBookById: getBookById
    };
};

module.exports = goodreadsService;