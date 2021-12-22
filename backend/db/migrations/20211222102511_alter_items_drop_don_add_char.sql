-- migrate:up
ALTER TABLE items
  DROP COLUMN don_id,
  ADD COLUMN char_id INT NOT NULL REFERENCES charities(char_id);

-- migrate:down
ALTER TABLE items
  ADD COLUMN don_id,
  DROP COLUMN char_id;
