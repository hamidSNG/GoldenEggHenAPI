var express = require('express'),
app = express(),
port =  3001,

mongoose = require('mongoose'),
signal = require('./API/Model/GoldenEggModel'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/GoldenEggHen');


 app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

var routes = require('./API/Route/GoldenEggRoute');
routes(app);



app.listen(port);

console.log('GoldenEggHen restfull API started on port: ' + port);
