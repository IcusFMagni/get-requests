var express = require('express')
var router = express.Router();
var quotes_data  = require('../modules/quotes-data');

var howManyTimes = 0
router.get('/random', function (req, res) {
    res.send(quotes_data[Math.floor(Math.random()*4)]);
    howManyTimes++
    console.log('this hase been returned '+howManyTimes+' times')
})

router.get('/first', function(req,res) {
    res.send(quotes_data[0])
})

router.get('/',function(req,res) {
    res.send("you can get a random quote at /quote/random and a regular one at/ quote/first")
})
router.get('/all',function(req,res) {
    res.send(quotes_data)
})
module.exports = router;

router.post('/new', function (req,res) {
    console.log('something else');
    console.log('req.body in new quote post', req.body);
    quotes_data.push({quoteText: req.body.quote_to_add})
    res.sendStatus(200)
}) 