var express = require('express')
var router = express.Router();


router.get('/really-great', function (req, res) {
    res.send('this is a great string.')
    console.log('fug')
})

module.exports = router;