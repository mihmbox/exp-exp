var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var users = [
        {
            name: 'Mik'
        },
        {
            name: 'Jane'
        },
        {
            name: 'Jim'
        },
        {
            name: 'David'
        }
    ];
    res.send(users);
});

module.exports = router;
