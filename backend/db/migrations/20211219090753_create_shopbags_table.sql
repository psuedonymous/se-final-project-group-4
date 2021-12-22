-- migrate:up
CREATE TABLE shopbags (
  shopbag_id BIGSERIAL PRIMARY KEY,
  acc_id INT NOT NULL REFERENCES accounts(acc_id),
  item_id INT NOT NULL REFERENCES items(item_id)
);

-- migrate:down
DROP TABLE shopbags;
