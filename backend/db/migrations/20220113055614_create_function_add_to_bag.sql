-- migrate:up
CREATE OR REPLACE FUNCTION add_to_bag (
  account_id BIGINT,
  item BIGINT
)
RETURNS VOID
LANGUAGE plpgsql
AS
$$
DECLARE
  item_arr BIGINT[];
BEGIN
  IF (SELECT EXISTS(SELECT 1 FROM shopbags WHERE acc_id = account_id)) THEN
    UPDATE shopbags SET items_list = ARRAY_APPEND(items_list, item) WHERE acc_id = account_id;
  ELSE
    INSERT INTO shopbags(acc_id, items_list) VALUES(account_id, ARRAY_APPEND(item_arr, item));
  END IF; 
END;
$$

-- migrate:down
DROP FUNCTION add_to_bag;
