const express = require("express");

const router = express.Router();

const { current, loginUser, registerUser } = require("../controllers/user.controller");
const validateToken = require("../middleware/validateToken.handler");

router.get("/current", validateToken, current)
    .post('/register', registerUser)
    .post('/login', loginUser);

module.exports = router;