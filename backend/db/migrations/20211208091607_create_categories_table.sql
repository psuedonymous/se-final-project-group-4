-- migrate:up
CREATE TABLE categories (
    cat_id BIGSERIAL PRIMARY KEY,
    cat_name VARCHAR(40) UNIQUE NOT NULL
);

-- migrate:down
DROP TABLE categories;
