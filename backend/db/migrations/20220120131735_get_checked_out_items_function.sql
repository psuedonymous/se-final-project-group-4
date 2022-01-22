-- migrate:up
CREATE OR REPLACE FUNCTION get_checked_out_items(
  items INTEGER[]
)
RETURNS TABLE (
  i_id BIGINT,
  s_id INTEGER,
  i_name VARCHAR(40),
  i_price NUMERIC,
  i_image TEXT,
  c_id INTEGER,
  d_id INTEGER,
  i_cloudinary_id TEXT
)
LANGUAGE plpgsql
AS $$
DECLARE
item RECORD;
BEGIN 
  FOR item IN SELECT UNNEST(items)
  LOOP 
  RETURN QUERY
      SELECT item_id, shop_id, item_name, item_price, item_image, char_id, don_id, item_cloudinary_id 
      FROM items 
      WHERE item_id = item.unnest;
    END LOOP;
END;
$$

-- migrate:down
DROP FUNCTION get_checked_out_items;
