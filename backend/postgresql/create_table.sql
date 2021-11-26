-- creating enum type for user type
CREATE TYPE u_type AS ENUM('buyer', 'seller');


CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    user_fname VARCHAR(30) NOT NULL,
    user_lname VARCHAR(30) NOT NULL,
    user_cont_num TEXT,
    user_dob DATE NOT NULL,
    user_type u_type
);


CREATE TABLE accounts (
    acc_id BIGSERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    acc_username VARCHAR(40) NOT NULL,
    acc_email VARCHAR(40)  NOT NULL,
    acc_password VARCHAR(40) NOT NULL
);


CREATE TABLE shops (
    shop_id BIGSERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id),
    shop_name VARCHAR(40) NOT NULL
);

CREATE TABLE items (
    item_id BIGSERIAL PRIMARY KEY,
    cat_id INT NOT NULL REFERENCES categories(cat_id),
    shop_id INT NOT NULL REFERENCES shops(shop_id),
    don_id INT REFERENCES donations(don_id),
    item_name VARCHAR(40) NOT NULL,
    item_price NUMERIC NOT NULL,
    item_desc VARCHAR(500) NOT NULL,
    item_exp_date DATE,
    item_date_posted DATE NOT NULL
);


CREATE TABLE categories (
    cat_id BIGSERIAL PRIMARY KEY,
    cat_name VARCHAR(40) NOT NULL
);


CREATE TABLE donations (
    don_id BIGSERIAL PRIMARY KEY,
    char_id INT NOT NULL REFERENCES charities(char_id),
    don_amount NUMERIC NOT NULL,
    don_dot DATE NOT NULL
);


CREATE TABLE charities (
    char_id BIGSERIAL PRIMARY KEY,
    char_name VARCHAR(40) NOT NULL,
    char_cont_num TEXT NOT NULL,
    char_email VARCHAR(40),
    char_address VARCHAR(40) NOT NULL,
    char_desc VARCHAR(500) NOT NULL
);