var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            var hbsObject = {
                burgers: dbBurger
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create(
            {
                burger_name: req.body.name
            }).then(function (dbBurger) {
                res.json(dbBurger);
            });
    });

};


// router.post("/api/burgers", function (req, res) {
// 	burger.insertOne([
// 			req.body.name
// 		], function (result) {
// 			// Send back the ID of the new quote
// 			res.json({ id: result.insertId });
// 		});
// });

// router.put("/api/burgers/:id", function (req, res) {
// 	var condition = "id = " + req.params.id;

// 	console.log("condition", condition);

// 	burger.updateOne(
// 		condition, function (result) {
// 		if (result.changedRows == 0) {
// 			// If no rows were changed, then the ID must not exist, so 404
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 	});
// });