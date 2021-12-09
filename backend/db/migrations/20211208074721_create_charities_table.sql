-- migrate:up
CREATE TABLE charities (
    char_id BIGSERIAL PRIMARY KEY,
    char_name VARCHAR(40) NOT NULL,
    char_cont_num TEXT NOT NULL,
    char_email VARCHAR(40),
    char_address VARCHAR(40) NOT NULL,
    char_desc VARCHAR(500) NOT NULL
);

-- migrate:down
DROP TABLE charities;
