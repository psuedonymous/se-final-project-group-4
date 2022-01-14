-- migrate:up
CREATE OR REPLACE FUNCTION get_shopbag_items (
  account_no BIGINT
)
RETURNS TABLE (
  i_id BIGINT,
  c_id INTEGER,
  s_id INTEGER,
  i_name VARCHAR(40),
  i_price NUMERIC,
  i_desc VARCHAR(500),
  i_exp_date DATE,
  i_date_posted DATE, 
  i_image TEXT,
  ch_id INTEGER,
  d_id INTEGER,
  i_cloudinary_id TEXT
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
    RETURN QUERY
      SELECT * 
      FROM items 
      WHERE item_id = item.unnest;
    END LOOP;

END;
$$


-- migrate:down
DROP FUNCTION get_shopbag_items;
