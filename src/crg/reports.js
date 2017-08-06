var Promise = require("promise"),
    Client = require("../client"),
    notNull = function(passage){return !!passage;},
    Reports = {
      allPassages: function(){
        return new Promise(function (resolve, reject) {
          Client.get("crg/passages").once("value").then(function (data) {
            resolve({passages: data.val().filter(notNull)});
          });
        });

      }
    };

module.exports = Reports;