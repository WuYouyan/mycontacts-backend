const asyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

/**
 * @description register user
 * @route POST /api/users/register
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists !");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log('hashedPassword', hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword 
    });
    console.log('User created: ', user)
    if (user) {
        res.status(201).json({ _id: user.id, mail: user.email}); 
    } else {
        res.status(400);
        throw new Error("Invalid user data !");
    }
});

/**
 * @description login user
 * @route POST /api/users/login
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});
/**
 * @description current user
 * @route GET /api/users/current
 * @access private
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const current = asyncHandler(async (req, res) => {

    console.log('get current');
    res.json(req.user);
});

module.exports = {
    registerUser: registerUser,
    loginUser: loginUser,
    currentUser: currentUser
};
