-- migrate:up
CREATE TABLE donations (
    don_id BIGSERIAL PRIMARY KEY,
    char_id INT NOT NULL REFERENCES charities(char_id),
    don_amount NUMERIC NOT NULL,
    don_dot DATE NOT NULL
);

-- migrate:down
DROP DATABASE donations;
