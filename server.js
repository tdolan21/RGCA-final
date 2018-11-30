var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var passport   = require('passport')
var session    = require('express-session')
var env        = require('dotenv').load()

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Method override for RESTFul form submissions
app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Handlebars config ---------------------------------------/
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

	//Models
  var models = require("./models");

// Route config -------------------------------------------/
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//Routes
var authRoute = require('./routes/auth')(app,passport);

//load passport strategies
require('./config/passport/passport')(passport,models.user);


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.info(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
