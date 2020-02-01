var mysql = require("mysql");
var connection;
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
connection = mysql.createConnection({
    host: "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "xe5f4lyk9xkhtyym",
    password: "sb9oibkrrto4cd5q",
    database: "fpqelp6od6vee3tw"
});
// }
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
