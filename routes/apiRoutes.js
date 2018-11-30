var testApiController = require("../controllers/testApi");
var linkedinController = require("../controllers/linkedin");


module.exports = function(app) {
  app.get("/test", testApiController.index);
};
// module.exports = function(app) {
//   app.get("/linkedin", linkedinController.index);
// };

