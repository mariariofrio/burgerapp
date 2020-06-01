DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;
