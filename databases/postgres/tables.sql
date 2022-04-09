-- Creates all tables for the database and adds some dummy data.

CREATE TABLE IF NOT EXISTS person (
    person_id   SERIAL PRIMARY KEY,
    username    varchar(255)
);

CREATE TABLE IF NOT EXISTS searcher (
  searcher_id   SERIAL PRIMARY KEY,
  FOREIGN KEY (searcher_id) REFERENCES person(person_id)
);

CREATE TABLE IF NOT EXISTS poster (
  poster_id     SERIAL PRIMARY KEY,
  FOREIGN KEY (poster_id) REFERENCES person(
    title       varchar(255),person_id)
);

CREATE TABLE IF NOT EXISTS job_position (
    position_id SERIAL PRIMARY KEY,
    title       varchar(255),
    role_desc   TEXT,
    avg_salary  bigint
);

CREATE TABLE IF NOT EXISTS image (
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
    FOREIGN KEY (image_id) REFERENCES image(image_id)
);

CREATE TABLE IF NOT EXISTS job_listing (
    listing_id  SERIAL PRIMARY KEY,
    title       varchar(255),
    jtype       varchar(255),
    jlocation   varchar(255),
     --Give a template and make it from html to mardown and reverse. It should be sanitized (w/ bleach?) and also the absence of limit in postgres' 'text' is subject to DoS
    det_desc    TEXT NOT NULL,
    position_id INT NOT NULL,
    poster_id INT NOT NULL,
    searcher_id INT NOT NULL,
    company_id INT NOT NULL,
    FOREIGN KEY (position_id) REFERENCES job_position(position_id),
    FOREIGN KEY (poster_id) REFERENCES poster(poster_id),
    FOREIGN KEY (searcher_id) REFERENCES searcher(searcher_id),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);

INSERT INTO company VALUES 
(1,'CosmoteTELECOM','Communications and Networking','https://www.cosmote.gr/hub/','This is a test description for CosmoteTELECOM',10, NULL);
