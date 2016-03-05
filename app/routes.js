// HTTP ROUTING

var countryData = require('./models/countries.geo.json')
var ctrls = require('../controllers/Ctrl.lastFM.js');
var apiRouter = require('express').Router();
var db = require('./models/userModel.js');

//||\\ API routes

// JSON Sends
apiRouter.get('/api/lib', function(req, res){
	res.json(countryData)
});

// Page Routes

apiRouter.get('/', function (req, res){
    res.sendFile('index.html', {root: './public/html'})
});

apiRouter.get('/insights', function (req, res){
    res.sendFile('insights.html', {root: './public/html'})
});

// Users
// apiRouter.route('/users')
// 	.get(ctrls.user.all)
// 	.post(ctrls.user.upsert)

// Exports
module.exports = apiRouter
