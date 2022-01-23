-- migrate:up
ALTER TABLE accounts
  ADD COLUMN cloudinary_id TEXT;

-- migrate:down
DROP COLUMN cloudinary_id;
