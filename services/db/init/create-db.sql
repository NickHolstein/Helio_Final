drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists tp;
drop database if exists tp_integration;
drop role if exists tp_app;
drop role if exists tp_read;

create role tp_app login password 'tpdev' valid until 'infinity';
create role tp_read login password 'tpdev' valid until 'infinity';
create database tp;
create database tp_integration;
