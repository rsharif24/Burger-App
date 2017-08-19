var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var orm = require("./config/orm.js");

// orm.selectAll("burgers");
// orm.insertOne("burgers", "burger_name", "Veggie Burger");
// orm.updateOne("burgers", "burger_name", "Turkey Burger", "id", "2")