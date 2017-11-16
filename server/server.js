var bodyParser = require('body-parser')
var reallyGreat = require('./routes/really-great')
var express= require('express')
var quotes = require('./routes/quotes')
var app= express()
var port= 5000;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}))


app.use('/really-great', reallyGreat);
app.get('/dinosaur', function (req, res){
    res.send('Rawr!!');
})
app.use('/quotes', quotes);
//we want /quote/random
//we want /quote/first 



app.listen(port, function() {
    console.log('listening on port', port)
});
