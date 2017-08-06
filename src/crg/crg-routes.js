var SceneRoutes = {
    load: function(app){
      app.get('/crg/scenes/:id', function(request, response) {
        response.send(JSON.stringify({message: "You asked for " +request.params["id"]}))
      });

    }
};
module.exports = SceneRoutes;