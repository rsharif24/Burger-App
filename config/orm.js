var connection = require("./connection.js")

var orm = {
    selectAll: function(table, cb){
        var query = "select * from ??";
        connection.query(query, [table], function(err,result){
            cb(result);
        });
    },
    insertOne: function(table, col, value, cb){
        var query = "insert into " + table + " (" + col + ") " + "values " + "('"+ value + "')";
        connection.query(query, function(err, result){
            cb(result);
        });
    },
    updateOne: function(table, setName, setValue, whereName, whereValue, cb){
        var query = "update " + table + " set " + setName + "=" + "'" + setValue + "' where " + whereName + "= " + whereValue;
        connection.query(query, function(err, result){
            cb(result);
        });
    }
};

module.exports = orm;