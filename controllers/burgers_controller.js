var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.insert([req.body.burger_name], function (result) {
        console.log(req.body.burger_name);
        res.json({ id: result.insertId })
    });
});
router.put("/api/burgers:id", function (req, res) {
    var condition = "id = " + parseInt(req.params.id);
    console.log(condition)
    var devoured = {
        devoured: req.body.devoured
    };
    burger.update(devoured, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;
