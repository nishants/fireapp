var UserService = require("./user-service"),
    SceneRoutes = {
      load: function(app){
        app.get('/users/:id', function(request, response) {
          var success = function (data) {
                response.send(JSON.stringify(data))
              },
              error   = function (data) {
                response.send(JSON.stringify(data))
              };
          UserService.find(request.params.id).then(success, error);
        });

        app.post('/users', function(request, response) {
          var success = function (data) {
                response.send(JSON.stringify(data))
              },
              error   = function (data) {
                response.send(JSON.stringify(data))
              };
          UserService.create_new(request.body.user).then(success, error);
        });
      }
};
module.exports = SceneRoutes;