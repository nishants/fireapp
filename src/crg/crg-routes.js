var SceneEvent  = require("./scene-event")
    Reports     = require("./reports"),
    SceneRoutes = {
    load: function(app){

      app.get('/crg/reports/all', function(request, response) {
        var success   = function (data) {response.send(JSON.stringify(data))},
            error     = function (data) {response.send(JSON.stringify(data))};

        Reports.allPassages().then(success, error);
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