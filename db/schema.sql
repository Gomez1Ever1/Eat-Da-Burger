DROP DATABASE IF EXISTS fpqelp6od6vee3tw;
CREATE DATABASE fpqelp6od6vee3tw;
USE fpqelp6od6vee3tw;
CREATE TABLE burgers
(   
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);