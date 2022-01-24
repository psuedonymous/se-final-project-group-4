-- migrate:up
CREATE OR REPLACE FUNCTION get_my_purchase(
    status VARCHAR(20)
)
RETURNS TABLE (
  i_id BIGINT,
  s_id INTEGER,
  i_name VARCHAR(40),
  i_price NUMERIC,
  i_image TEXT,
  ch_id INTEGER,
  d_id INTEGER,
  i_cloudinary_id TEXT
)
LANGUAGE plpgsql
AS
$$
BEGIN
    RETURN QUERY
        SELECT item_id, shop_id, item_name, item_price, item_image, i.char_id, i.don_id, item_cloudinary_id
        FROM items AS i, donations AS d 
        WHERE i.don_id = d.don_id 
          AND d.don_status = status;
END;
$$
-- migrate:down
DROP FUNCTION get_my_purchase;
