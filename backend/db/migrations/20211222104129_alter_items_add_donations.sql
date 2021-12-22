-- migrate:up
ALTER TABLE items
  ADD COLUMN don_id INT REFERENCES donations(don_id);

-- migrate:down
ALTER table items
  DROP COLUMN don_id;
