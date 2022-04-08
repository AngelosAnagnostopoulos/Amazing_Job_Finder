-- Creates all tables for the database and adds some dummy data.

CREATE TABLE IF NOT EXISTS person (
    id          SERIAL PRIMARY KEY,
    username    varchar(255),
    is_employee boolean
);

CREATE TABLE IF NOT EXISTS job_listing (
    id          SERIAL PRIMARY KEY,
    title       varchar(255),
    jtype       varchar(255),
    jlocation   varchar(255),
     --Give a template and make it from html to mardown and reverse. It should be sanitized (w/ bleach?) and also the absence of limit in postgres' 'text' is subject to DoS
    det_desc    TEXT NOT NULL,
    is_active   boolean
);

CREATE TABLE IF NOT EXISTS job_position (
    id          SERIAL PRIMARY KEY,
    title       varchar(255),
    role_desc   TEXT,
    avg_salary  bigint
);

CREATE TABLE IF NOT EXISTS company (
    id          SERIAL PRIMARY KEY,
    cname       varchar(255),
    ctype       varchar(255),
    clink       varchar(255),
    c_desc      TEXT,
    rating      smallint
);

INSERT INTO company VALUES 
(1,'CosmoteTELECOM','Communications and Networking','https://www.cosmote.gr/hub/','This is a test description for CosmoteTELECOM',10);
