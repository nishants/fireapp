var Promise = require("promise"),
    Client = require("../client"),
    notNull = function(passage){return !!passage;},
    withIds   = function(passages){
      var withIds = [];
      for(var passageId in passages){
        passages[passageId].id = passageId;
        withIds.push(passages[passageId]);
      }
      return withIds;
    },
    Reports = {
      byPassageId: function(passageId){
        return new Promise(function (resolve, reject) {
          Client.get("crg/passages/"+passageId).once("value").then(function (data) {
            resolve({scenes: withIds(data.val().scenes).filter(notNull)});
          });
        });
      },
      allPassages: function(){
        return new Promise(function (resolve, reject) {
          Client.get("crg").once("value").then(function (data) {
            resolve({passages: withIds(data.val().passages).filter(notNull)});
          });
        });

      }
    };

module.exports = Reports;