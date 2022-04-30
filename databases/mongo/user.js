//Basic user creation script for the database. Switch later.
db.createUser({
    user:"angelos",
    pwd:"example",
    roles: [
        {
            role:"admin",
            db:"authDB",
        },
        "readWriteAnyDatabase"
    ],
});