-- migrate:up
CREATE OR REPLACE FUNCTION add_new_charity (
  charity_name VARCHAR(40),
  charity_contact_no TEXT,
  charity_email VARCHAR(40),
  charity_address VARCHAR(40),
  charity_description VARCHAR(500),
  charity_image TEXT
)
RETURNS VOID
LANGUAGE plpgsql
AS
$$
BEGIN
  INSERT INTO charities(char_name, char_cont_num, char_email, char_address, char_desc, char_image) 
  VALUES (charity_name, charity_contact_no, charity_email, charity_address, charity_description, charity_image);
END;
$$

-- migrate:down
DROP FUNCTION add_new_charity();
