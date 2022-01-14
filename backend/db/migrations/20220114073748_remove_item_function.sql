-- migrate:up
CREATE OR REPLACE FUNCTION remove_item (
  account_no BIGINT,
  i_id BIGINT
)
RETURNS TABLE (
  reduced_list BIGINT[]
)
LANGUAGE plpgsql
AS
$$
DECLARE
 item RECORD;
BEGIN
  
    FOR item IN 
      SELECT UNNEST(items_list) FROM shopbags WHERE acc_id = account_no
    LOOP
      IF i_id = item.unnest THEN
      UPDATE shopbags SET items_list = ARRAY_REMOVE((SELECT items_list FROM shopbags WHERE acc_id = account_no), i_id)
      WHERE acc_id = account_no;

      RETURN QUERY
      SELECT items_list FROM shopbags WHERE acc_id = account_no;
      END IF;
    END LOOP;

END;
$$

-- migrate:down
DROP FUNCTION remove_item;
