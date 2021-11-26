
--     user_id BIGSERIAL PRIMARY KEY,
--     user_fname VARCHAR(30) REQUIRED NOT NULL,
--     user_lname VARCHAR(30) REQUIRED NOT NULL,
--     user_cont_num TEXT,
--     user_dob DATE REQUIRED NOT NULL,
--     user_type u_type

INSERT INTO users(user_fname, user_lname, user_cont_num, user_dob, user_type) 
    VALUES
        ('Jenny Rose', 'Suelan', '09636261878','2001-07-09', NULL),
        ('Jann Carmely', 'Lajo', '09757473212','2001-07-09', NULL),
        ('Ferjen Dave', 'Torred', '09876543292','2001-07-09', 'seller'),
        ('Renzo Gabriel', 'Laporno', '08765432345','2001-07-09', 'buyer'),
        ('Edmel John', 'Linaugo', '095643261542','2001-07-09', NULL)
;


--     acc_id BIGSERIAL PRIMARY KEY,
--     user_id REQUIRED NOT NULL FOREIGN KEY,
--     acc_username VARCHAR(40) REQUIRED NOT NULL,
--     acc_email VARCHAR(40) REQUIRED NOT NULL,,
--     acc_password VARCHAR(40) REQUIRED NOT NULL


INSERT INTO accounts(user_id, acc_username, acc_email, acc_password) VALUES
    (1,'psuerreal','jennyrose@gmail.com','incorrect'),
    (2,'karms','karmslajo@gmail.com','karms'),
    (3,'dav','ferjendave@gmail.com','dav'),
    (4,'dinocorn','renz@gmail.com','uniqorn'),
    (5,'eddie','edmeljohn@gmail.com','kuyaEddie')