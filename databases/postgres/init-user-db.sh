#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    DO \$$
    BEGIN
       IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_roles  -- SELECT list can be empty for this
          WHERE  rolname = 'angelos') THEN

          CREATE ROLE angelos LOGIN PASSWORD 'example';
       END IF;
    END
    \$$;

    SELECT 'CREATE DATABASE app'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'app')\gexec
    
    GRANT ALL PRIVILEGES ON DATABASE app TO angelos;
    
    \c app

EOSQL
