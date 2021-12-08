-- migrate:up
  CREATE TABLE accounts (
    acc_id BIGSERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    acc_username VARCHAR(40) UNIQUE NOT NULL, 
    acc_email VARCHAR(40) UNIQUE NOT NULL,
    acc_password VARCHAR(40) NOT NULL
);

-- migrate:down
DROP TABLE accounts;
