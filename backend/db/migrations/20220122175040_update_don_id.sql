-- migrate:up
CREATE OR REPLACE PROCEDURE update_don_id(
  items BIGINT[]
)
LANGUAGE plpgsql
AS $$
DECLARE
item RECORD;
BEGIN 
  FOR item IN SELECT UNNEST(items)
    LOOP 
      UPDATE items 
      SET don_id = (SELECT MAX(don_id) FROM donations)
      WHERE item_id = item.unnest;
    END LOOP;
END;
$$

-- migrate:down
DROP PROCEDURE update_don_id;
