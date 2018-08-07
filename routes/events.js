var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/events', function(req, res, next) {
    res.render('events', { title: 'Express' });
});

module.exports = router;
