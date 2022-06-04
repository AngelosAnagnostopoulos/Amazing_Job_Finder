-- Creates all tables for the database and adds some dummy data.

CREATE TABLE IF NOT EXISTS person (
    person_id   SERIAL PRIMARY KEY,
    person_auth_id char(24),
    username    varchar(255)
);

CREATE TABLE IF NOT EXISTS searcher (
  searcher_id   SERIAL PRIMARY KEY,
  FOREIGN KEY (searcher_id) REFERENCES person(person_id)
);

CREATE TABLE IF NOT EXISTS poster (
  poster_id     SERIAL PRIMARY KEY,
  title       varchar(255),
  FOREIGN KEY (poster_id) REFERENCES person(person_id)
);

CREATE TABLE IF NOT EXISTS job_position (
    position_id SERIAL PRIMARY KEY,
    title       varchar(255),
    role_desc   TEXT,
    avg_salary  bigint
);

CREATE TABLE IF NOT EXISTS images (
  image_id    SERIAL PRIMARY KEY,
  image_name  varchar(255),
  image_dat   bytea
);

CREATE TABLE IF NOT EXISTS company (
    company_id  SERIAL PRIMARY KEY,
    cname       varchar(255),
    ctype       varchar(255),
    clink       varchar(255),
    c_desc      TEXT,
    rating      smallint,
    image_id 	  INT,
    FOREIGN KEY (image_id) REFERENCES images(image_id)
);

CREATE TABLE IF NOT EXISTS job_listing (
    listing_id  SERIAL PRIMARY KEY,
    title       varchar(255),
    jtype       varchar(255),
    jlocation   varchar(255),
     --Give a template and make it from html to mardown and reverse. It should be sanitized (w/ bleach?) and also the absence of limit in postgres' 'text' is subject to DoS
    created_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    det_desc    TEXT NOT NULL,
    salary INT NOT NULL,
    position_id INT NOT NULL,
    poster_id INT NOT NULL,
    company_id INT NOT NULL,
    FOREIGN KEY (position_id) REFERENCES job_position(position_id),
    FOREIGN KEY (poster_id) REFERENCES poster(poster_id),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);

CREATE TABLE IF NOT EXISTS job_application (
    application_id SERIAL PRIMARY KEY,
    job_listing_id INT NOT NULL,
    searcher_id INT NOT NULL,
    application_text TEXT, -- maybe a file?
    application_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_listing_id) REFERENCES job_listing(listing_id),
    FOREIGN KEY (searcher_id) REFERENCES searcher(searcher_id)
);

INSERT INTO company VALUES 
(1,'CosmoteTELECOM','Communications and Networking','https://www.cosmote.gr/hub/','This is a test description for CosmoteTELECOM',10, NULL);

INSERT INTO job_position VALUES (1, 'Software Engineer', 'Develop Software lmao', 69420);

INSERT INTO person VALUES (1, '629b4f81877f8f5d3102af96', 'mike');

INSERT INTO poster VALUES (1, 'recruiter');

INSERT INTO job_listing (title, jtype, jlocation, det_desc, salary, position_id, poster_id, company_id) VALUES
('Frontend Soydev', 'Fulltime', 'bloatland', 'React has no runtime overhead xd!', 69420, 1, 1, 1),
('Build Systems Engineer', 'Fulltime', 'sigma land', 'Makefiles to 2020 xd', 654321, 1, 1, 1);

CREATE VIEW all_jobs_detailed_listing_view AS 
    SELECT 
        listing_id AS "id", 
        job_listing.title AS title, 
        jtype AS hours, 
        cname AS "company",
        jlocation AS "location", 
        role_desc AS "description", 
        created_timestamp AS "postdate", 
        det_desc AS "bigdescription",
        job_position.title AS "category",
        salary
    FROM job_listing NATURAL LEFT JOIN company, job_position;
