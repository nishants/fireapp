var Promise = require("promise"),
    Client = require("../client"),

   Feedback = {
      forPassage: function(passageId, clientId, feedback){
        return new Promise(function (resolve, reject) {
          var reference = "crg/passages/:passageId/feedback/:clientId".replace(":passageId",passageId).replace(":clientId",clientId);;
          feedback.timestamp = new Date().getTime();
          Client.get(reference).set(feedback).then(function(){
            resolve(feedback);
          });
        });
      }
   };

module.exports = Feedback;