var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
insertOne: function (value, cb) {
  orm.insertOne('burgers', 'burger_name', value, function (res) {
      cb(res);
  });
},

updateOne: function (value, id, cb) {
  orm.updateOne('burgers', 'devoured', value, id, function (res) {
      cb(res);
  });
},
};

module.exports = burger