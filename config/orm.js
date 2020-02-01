var connection = require("../config/connection.js");
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    };
    return arr;
};
const orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (newBurger, cb) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES(?, false);";
        connection.query(queryString, [newBurger], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (devoured, condition, cb) {
        var queryString = "UPDATE burgers SET " + objToSql(devoured) + " WHERE " + condition + ";";
        // devoured = devoured === "true" ? true : false;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(queryString)
            cb(result);
        });
    }
}
module.exports = orm;