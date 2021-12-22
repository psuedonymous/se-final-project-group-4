-- migrate:up
ALTER TABLE charities
  ADD COLUMN char_image TEXT;

-- migrate:down
ALTER TABLE charities
  DROP COLUMN char_image;
