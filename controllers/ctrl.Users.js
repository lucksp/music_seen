var User = require('../app/models/userModel.js')
var Tour = require('../app/models/tourModel.js')

function getUser (req, res){
	if (req.body.username){
		User.findOne({ username : req.body.username})
				res.send(doc)
			}
	}

module.exports = {
	getUser	: getUser
}