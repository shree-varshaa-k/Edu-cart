import bcrypt from "bcryptjs";

const users = [{
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
},
{
name: "Suhail",
email: "suhail@gmail.com",
password: bcrypt.hashSync("12345", 10),
isAdmin: false,
},
{
name: "Difa",
email: "difa@gmail.com",
password: bcrypt.hashSync("12345", 10),
isAdmin: false,
},
]

export default users;