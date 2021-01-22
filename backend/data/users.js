import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "admin@mail.com",
        password: bcrypt.hashSync("admin123", 10),
        isAdmin: true,
    },
    {
        name: "Abhishek Ranjan",
        email: "abhishek@mail.com",
        password: bcrypt.hashSync("abhi123", 10),
    },
    {
        name: "Jake Hall",
        email: "jake@mail.com",
        password: bcrypt.hashSync("jake123", 10),
    },
];

export default users;
