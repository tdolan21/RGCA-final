var homeController = require("../controllers/home");
var linkedinController = require("../controllers/linkedin");
var libraryController = require("../controllers/library");
var playerController = require("../controllers/player");
module.exports = function(app) {
  app.get("/index", homeController.renderHome);

  app.get("/linkedin", linkedinController.renderlinkedin);

  app.get("/library", libraryController.renderLibrary);

  app.get("/player", playerController.renderplayer);
};

