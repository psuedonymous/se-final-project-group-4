-- migrate:up
ALTER TABLE items
    ADD COLUMN item_cloudinary_id TEXT;

-- migrate:down
ALTER table items
  DROP COLUMN item_cloudinary_id;