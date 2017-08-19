var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "burgers_db",
    user: "root",
    password: "2a5i366"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    };
});

module.exports = connection;