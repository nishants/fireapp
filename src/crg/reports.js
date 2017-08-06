var Promise = require("promise"),
    Client = require("../client"),
    notNull = function(passage){return !!passage;},
    withId   = function(passage, index){
      passage && (passage.id = index);
      return passage;},
    Reports = {
      allPassages: function(){
        return new Promise(function (resolve, reject) {
          Client.get("crg").once("value").then(function (data) {
            resolve({passages: data.val().passages.map(withId).filter(notNull)});
          });
        });

      }
    };

module.exports = Reports;