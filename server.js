const express = require("express");
const errorHandle = require("./middleware/error.handler");
const connectDB = require("./config/dbConnection");

const dotenv = require("dotenv").config();
//https://www.youtube.com/watch?v=H9M02of22z4

console.log("Hello World");


connectDB();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/contacts', require('./routes/contact.route'));
app.use(errorHandle);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})