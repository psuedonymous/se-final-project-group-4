-- migrate:up
CREATE TYPE u_type AS ENUM('buyer', 'seller');

CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    user_fname VARCHAR(30) NOT NULL,
    user_lname VARCHAR(30) NOT NULL,
    user_cont_num TEXT,
    user_dob DATE NOT NULL,
    user_type u_type NOT NULL
);

-- migrate:down
DROP TABLE users;
