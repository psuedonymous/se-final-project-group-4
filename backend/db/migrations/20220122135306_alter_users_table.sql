-- migrate:up
ALTER TABLE users
  ADD COLUMN user_addr TEXT;


-- migrate:down
DROP COLUMN user_addr;