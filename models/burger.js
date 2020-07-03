var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
insertOne: function (value, cb) {
  orm.create('burgers', ['burger_name','devoured'], [value, 0], function (res) {
      cb(res);
  });
},

updateOne: function (value, id, cb) {
  orm.update('burgers', {'devoured': value}, `ID = ${id}`, function (res) {
      cb(res);
  });
},
};

module.exports = burger