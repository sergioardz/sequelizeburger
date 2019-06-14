var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({
            // Order burgers alphabetically 
            order: [["burger_name", "ASC"]]
        }).then(function (dbBurger) {
            var hbsObject = {
                burgers: dbBurger
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create(req.body).then(function () {
            res.redirect("/");
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurger) {
                res.json(dbBurger);
            });
    });
};