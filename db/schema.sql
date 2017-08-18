create database burgers_db;

use burgers_db;

create table burgers (
    id int auto_increment not null,
    burger_name varchar(255),
    devoured boolean,
    date timestamp,
    primary key(id)

);