-- migrate:up
CREATE OR REPLACE FUNCTION add_to_bag (
  account_id BIGINT,
  items BIGINT[]
)
RETURNS VOID
LANGUAGE plpgsql
AS
$$
BEGIN
  INSERT INTO shopbags(acc_id, items_list) 
  VALUES (account_id, items);
END;
$$


-- migrate:down
DROP FUNCTION add_to_bag();
