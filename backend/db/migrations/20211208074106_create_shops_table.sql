-- migrate:up
CREATE TABLE shops (
    shop_id BIGSERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id),
    shop_name VARCHAR(40) UNIQUE NOT NULL
);

-- migrate:down
DROP TABLE shops;
