const express = require("express");

const dotenv = require("dotenv").config();
//https://www.youtube.com/watch?v=H9M02of22z4

console.log("Hello World");



const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/contacts', require('./routes/contact.route'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})