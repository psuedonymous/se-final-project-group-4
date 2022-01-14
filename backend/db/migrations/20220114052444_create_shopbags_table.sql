-- migrate:up
CREATE TABLE shopbags (
  shopbag_id BIGSERIAL PRIMARY KEY,
  acc_id BIGINT NOT NULL REFERENCES accounts(acc_id),
  items_list BIGINT[]
)

-- migrate:down
DROP TABLE shopbags;
