-- migrate:up
CREATE TYPE d_stat AS ENUM('reserved', 'in-process', 'shipped', 'completed', 'cancelled');

-- migrate:down
DROP TYPE d_stat;

