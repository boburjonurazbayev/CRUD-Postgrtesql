create database test_users;

create table users(
    user_id serial primary key,
    username varchar(32) not null,
    age smallint not null,
    created_at timestamp default current_timestamp
);

insert into users (username, age) values ('Nozim', 21);
select * from users;