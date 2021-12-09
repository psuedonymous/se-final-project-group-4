-- migrate:up
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

-- migrate:down
DROP TABLE items;
