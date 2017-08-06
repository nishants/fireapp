var Promise = require("promise"),
    Client = require("../client"),
    SceneEvent = {
      endOfScene: function (passageId, sceneId, event) {
        return new Promise(function (resolve, reject) {
          var reference = "crg/passages/:passageId/scenes/:sceneId/"
                            .replace(":passageId", passageId)
                            .replace(":sceneId", sceneId),
              timeSpent = parseInt(event.timeSpent) || 0,
              incorrectAnswers = parseInt(event.incorrectAnswer) || 0;

          Client.get(reference).once("value").then(function (data) {
            var scene = data.val() || {
                  timesPlayed: 0,
                  sumOfTimeSpent: 0,
                  incorrectAnswer: 0
                };
            scene.timesPlayed     = scene.timesPlayed + 1;
            scene.sumOfTimeSpent  = scene.sumOfTimeSpent + timeSpent;
            scene.incorrectAnswer = scene.incorrectAnswer + incorrectAnswers;
            Client.get(reference).set(scene).then(function(){
              resolve({scene: scene})});
            });

        });
      }
    }

module.exports = SceneEvent;