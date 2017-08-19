var connection = require("./connection.js")

var orm = {
    selectAll: function(table){
        var query = "select * from ??";
        connection.query(query, [table], function(err,result){
            console.log(result);
        });
    },
    insertOne: function(table, col, value){
        var query = "insert into " + table + " (" + col + ") " + "values " + "('"+ value + "')";
        connection.query(query, function(err, result){
            console.log(result);
            console.log(err);
        });
    },
    updateOne: function(table, setName, setValue, whereName, whereValue ){
        var query = "update " + table + " set " + setName + "=" + "'" + setValue + "' where " + whereName + "= " + whereValue;
        connection.query(query, function(err, result){
            console.log(result);
            console.log(err);
        });
    }
};

module.exports = orm;