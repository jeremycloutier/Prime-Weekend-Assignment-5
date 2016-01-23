--[0]

--CREATE TABLE people
--(
--  id serial NOT NULL,
--  name character varying(255) NOT NULL,
--  address character varying(255) NOT NULL,
--	city character varying(255) NOT NULL,
--  age integer,
--  CONSTRAINT people_pkey PRIMARY KEY (id)
--);

--INSERT INTO people (name, address, city, age)
--    VALUES 	('Clark Kent', '983 Super St.', 'Metropolis', 53),
--        	('Bruce Wayne', '1 Wayne Rd.', 'Gotham City', 39),
--        	('Professor X', '723 X Ave.', 'Westchester', 92)
--;

--[1]

--CREATE TABLE addresses (
--        address_id SERIAL PRIMARY KEY,
--        person_id int,
--	address_type varchar(255),
--	address_street varchar(255),
--	address_city varchar(255),
--	address_state varchar(255),
--	address_zip varchar(255),
--	date_added TIMESTAMP,
--	CONSTRAINT personFk FOREIGN KEY
--	(person_id) REFERENCES people(id)
--);

--[2]

--INSERT INTO addresses (person_id, address_type, address_street, address_city, date_added)
--SELECT id, 'home', address, city, 'now'
--		FROM people;

--[3]

--INSERT INTO addresses (person_id, address_type, address_street, address_city, address_state, address_zip, date_added)
--VALUES(2, 'billing', 'PO Box 555', 'New York', 'NY', '55555','now'),
--(3, 'shipping', 'PO Box 555', 'New York', 'NY', '55555', 'now');

--[4]

--UPDATE addresses SET date_added = '02-01-2001 04:55:00' WHERE address_id = 2;

--[5]

--UPDATE addresses SET date_added = '10-31-2015' WHERE address_id = 5;

--SELECT * FROM addresses WHERE date_added < 'yesterday';

--[6]

ALTER TABLE people
DROP COLUMN address,
DROP COLUMN city;
--
--SELECT * FROM people;

--[7]

--SELECT * FROM people JOIN addresses 
--ON people.id = addresses.person_id;

--[8]

--SELECT * FROM people INNER JOIN addresses 
--ON people.id = addresses.person_id;

--[9]

--SELECT * FROM people LEFT OUTER JOIN addresses
--ON people.join_id = addresses.join_id;

--[10]

--SELECT * FROM people RIGHT OUTER JOIN addresses 
--ON people.join_id = addresses.join_id;
--[11]

--SELECT * FROM people FULL OUTER JOIN addresses 
--ON people.join_id = addresses.join_id;

--[12]

SELECT * FROM people LEFT OUTER JOIN addresses 
ON people.join_id = addresses.join_id;
WHERE addresses.address_street like '%PO%';

