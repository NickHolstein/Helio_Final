create table if not exists passhash
(
    user_handle uuid references users(user_handle),
    passhash text not null,
    mod_date timestamptz not null default now(),
    recovery_token text,
    recovery_token_exp_date timestamptz 
);
grant select, insert, update, delete on table passhash to tp_app;
grant select on table passhash to tp_read;
