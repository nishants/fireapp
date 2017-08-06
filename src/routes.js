var
    SceneRoutes = require("./crg/crg-routes.js");
    UserRoutes  = require("./users/user-routes.js");


module.exports = {
  load: function (app) {
    SceneRoutes.load(app);
    UserRoutes.load(app);
    app.get('/ping', function (request, response) {
      response.send(JSON.stringify({message: "I am alive !"}))
    });
  }
};