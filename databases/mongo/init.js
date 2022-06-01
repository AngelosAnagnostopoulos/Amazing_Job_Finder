db.getSiblingDB("authDB")
db.createCollection("users", { capped: false });

// Remove data later.
// Here we should store tha hashes and validate through the AuthAPI
/*
db.users.insert([
    {
        "username":"angelos",
        "password":"example"
    },
    { 
        "username": "michalis" , 
        "password" : "example"
    }   
]);
*/
