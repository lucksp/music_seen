var User = require('../app/models/userModel.js')
var Tour = require('../app/models/tourModel.js')

function getUser (req, res){

	var defaultPop = 'Tour'

	if (req.body._id){
		User.findOne({_id : req.body._id})
			.populate(defaultPop)
			.exec(function(err, doc){
				res.send(doc)
			})
	}
}

module.exports = {
	getUser	: getUser
}