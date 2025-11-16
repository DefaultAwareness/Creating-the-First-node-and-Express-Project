var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var places = [
        { name: 'Home', rating: 10 },
        { name: 'McDonalds', rating: 9 },
        { name: 'The Internet', rating: 5 },
        { name: 'My Bed', rating: 6 },
        { name: 'Virginia Beach', rating: 5 }
    ];

    // create a name
    var myname = "Simon Turcic";

    res.render('index', {
        title: 'Favorite Places',
        places: places,
        myname: myname
    });
});

module.exports = router;



