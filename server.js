var express = require('express');
var app = express();
//server setup
app.use(express.static(__dirname + '/www'))
app.listen(3000);
	console.log('working on 3000');