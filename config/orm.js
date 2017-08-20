var connection = require("./connection.js")

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
    selectAll: function(table, cb){
        var query = "select * from ??";
        connection.query(query, [table], function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, col, value, cb){
        var query = "insert into ?? (??) values (?)";
        connection.query(query, [table, col, value], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;


		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;