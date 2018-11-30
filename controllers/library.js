module.exports = {
    renderLibrary: function(req, res) {
      res.render("library", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    }
  };
  