-- migrate:up
CREATE TYPE i_stat AS ENUM('reserved', 'in process', 'shipped', 'received', 'cancelled');

ALTER TABLE items
  ADD COLUMN item_status i_stat;

-- migrate:down
DROP COLUMN item_image;

