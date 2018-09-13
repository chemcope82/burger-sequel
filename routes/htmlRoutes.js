var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data){
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
    });
};