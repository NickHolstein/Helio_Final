drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists Toph's Playhouse;
drop database if exists Toph's Playhouse_integration;
drop role if exists Toph's Playhouse_app;
drop role if exists Toph's Playhouse_read;

create role Toph's Playhouse_app login password 'Toph's Playhousedev' valid until 'infinity';
create role Toph's Playhouse_read login password 'Toph's Playhousedev' valid until 'infinity';
create database Toph's Playhouse;
create database Toph's Playhouse_integration;
