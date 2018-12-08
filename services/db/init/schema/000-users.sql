create extension if not exists pgcrypto;
create extension if not exists pg_stat_statements;

create table if not exists users
(
    user_handle uuid primary key default gen_random_uuid(),
    username text,
    first_name text,
  	middle_name text,
  	surname text,
  	suffix text,
    email text not null unique,
    joined_date timestamp default now(),
    verified boolean
);
grant select, insert, update, delete on table users to tp_app;
grant select on table users to tp_read;
