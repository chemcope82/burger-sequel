var db = require("../models");

module.exports = function(app) {
    app.post("/api/burgers/", function(req, res){
        db.Burger.create({burger_name: req.body.name}).then(function(result){
            res.json(result);
        });
    });

    app.put("/api/burgers/:id", function(req, res){
        db.Burger.update({
            devoured: true
        }, 
        {
          where: {
              id: req.params.id
            } 
        }).then(function(result){
            res.json(result);
        });
    });
};