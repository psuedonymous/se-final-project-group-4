-- migrate:up
ALTER TABLE items
  ADD COLUMN item_image TEXT;


-- migrate:down
DROP COLUMN item_image;
