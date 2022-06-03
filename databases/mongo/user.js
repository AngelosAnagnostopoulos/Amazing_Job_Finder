//Basic user creation script for the database. Switch later.
db.createUser({
    user:"test",
    pwd:"example",
    roles: [
        {
            role:"readWrite",
            db:"authDB",
        }
    ]
});
