var SceneEvent  = require("./scene-event")
    Reports     = require("./reports"),
    Feedback    = require("./feedback"),
    SceneRoutes = {
    load: function(app){

      app.post('/crg/passages/:passageId/feedback/:clientId', function(request, response) {
        var passageId = request.param("passageId"),
            clientId  = request.param("clientId"),
            feedback  = request.body.feedback,
            success   = function (data) {response.send(JSON.stringify(data))},
            error     = function (data) {response.send(JSON.stringify(data))};

        Feedback.forPassage(passageId, clientId, feedback).then(success, error);
      });

      app.get('/crg/reports/all', function(request, response) {
        var success   = function (data) {response.send(JSON.stringify(data))},
            error     = function (data) {response.send(JSON.stringify(data))};

        Reports.allPassages().then(success, error);
      });


      app.get('/crg/reports/passages/:passageId', function(request, response) {
        var passageId = request.param("passageId"),
            success   = function (data) {response.send(JSON.stringify(data))},
            error     = function (data) {response.send(JSON.stringify(data))};

        Reports.byPassageId(passageId).then(success, error);
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