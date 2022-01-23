-- migrate:up
ALTER TABLE donations
    ADD COLUMN don_status d_stat NOT NULL;

-- migrate:down
DROP COLUMN don_status;