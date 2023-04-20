const express = require("express");

const router = express.Router();

const { currentUser, loginUser, registerUser } = require("../controllers/user.controller");

router.get("/current", currentUser)
    .post('/register', registerUser)
    .post('/login', loginUser);

module.exports = router;