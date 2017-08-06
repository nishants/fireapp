var SceneEvent = require("./scenes/scene-event"),
    SceneRoutes = {
    load: function(app){
      app.get('/crg/scenes/:id', function(request, response) {
        response.send(JSON.stringify({message: "You asked for " +request.params["id"]}))
      });

      app.post('/crg/passages/:passageId/scenes/:sceneId/events/end-of-scene', function(request, response) {
        var passageId = request.param("passageId"),
            sceneId   = request.param("sceneId"),
            success   = function (data) {response.send(JSON.stringify(data))},
            error     = function (data) {response.send(JSON.stringify(data))};

        SceneEvent.endOfScene(passageId, sceneId, request.body.event).then(success, error);
      });

    }
};
module.exports = SceneRoutes;