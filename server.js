// server.js

// set up ======================================================================
var express  		= require('express');
var app      		= express();
var port     		= process.env.PORT || 3000;
var mongoose 		= require('mongoose');
// var passport 		= require('passport');
var morgan       	= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser   	= require('body-parser');
var session      	= require('express-session');
// var configDB 		= require('./config/database.js');
var apiRoutes 		= require('./app/routes.js');

// configuration ===============================================================
mongoose.connect('mongodb://localhost/musicseen', function (err) {
  if (err) console.log(err)
  console.log('Connected to MongoDB')
})
// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(express.static(__dirname + '/public'))

// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get information from html forms

// required for passport
// app.use(session({ secret: 'ilovelamp' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
app.use('/', apiRoutes)

app.use('/api', apiRoutes) // Initialize routes to use

// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// home route
// app.get('/', function (req, res) {
//   res.sendFile('index.html', {root: './public/html'})
// })


// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);