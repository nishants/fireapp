var SceneRoutes = {
    load: function(app){
      app.get('/crg/scenes', function(request, response) {
        response.send(JSON.stringify({message: "CRG is here."}))
      });

    }
};
module.exports = SceneRoutes;