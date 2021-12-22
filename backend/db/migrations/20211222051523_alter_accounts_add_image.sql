-- migrate:up
ALTER TABLE accounts
  ADD COLUMN acc_image TEXT;

-- migrate:down
ALTER TABLE accounts
  DROP COLUMN acc_image;
