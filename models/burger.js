var orm = require("../config/orm.js");
var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insert: function (newBurger, cb) {
        orm.insertOne(newBurger, function (res) {
            cb(res);
        });
    },
    update: function (devoured, condition, cb) {
        orm.updateOne(devoured, condition, function (res) {
            cb(res);
        })
    }
};
module.exports = burger;