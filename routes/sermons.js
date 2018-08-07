var express = require('express');
var router = express.Router();

/* GET sermons page. */
router.get('/', function(req, res, next) {
    res.render('sermons', { title: 'Express' });
});

module.exports = router;