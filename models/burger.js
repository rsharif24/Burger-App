var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(col, value, cb){
        orm.insertOne("burgers", col, value, function(res){
            cb(res);
        });
    },
    updateOne: function(setName, setValue, whereName, whereValue, cb){
        orm.updateOne("burgers", setName, setValue, whereName, whereValue, function(res){
            cb(res);
        });
    }
};

module.exports = burger;