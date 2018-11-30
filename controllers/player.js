module.exports = {
    renderplayer: function(req, res) {
      res.render("player", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    }
  };
  