-- migrate:up
CREATE TYPE d_stat AS ENUM('pending', 'done');

CREATE TABLE donations (
    don_id BIGSERIAL PRIMARY KEY,
    char_id INT NOT NULL REFERENCES charities(char_id),
    don_amount NUMERIC NOT NULL,
    don_dot DATE NOT NULL,
    don_status d_stat NOT NULL
);

-- migrate:down
DROP DATABASE donations;
