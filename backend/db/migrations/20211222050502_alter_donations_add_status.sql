-- migrate:up
CREATE TYPE d_stat AS ENUM('reserved', 'in process', 'shipped', 'received', 'cancelled');

ALTER TABLE donations
  ADD COLUMN don_status d_stat ;

-- migrate:down
ALTER TABLE donations
  DROP COLUMN don_status;
