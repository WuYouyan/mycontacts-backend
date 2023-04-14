const asyncHandler = require('express-async-handler');

/**
 * @description Get all contacts
 * @route GET /api/contacts
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const getContacts = asyncHandler(async (req, res) => {
    // res.send("Get all contacts");
    // res.json({ message: "Get all contacts"});
    res.status(200).json({ message: "Get all contacts"});
});

/**
 * @description Get contact
 * @route GET /api/contacts/:id
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
});

/**
 * @description Create contact
 * @route POST /api/contacts
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @
 */
const createContact = asyncHandler(async (req, res) => {
    console.log("Create contact: ", req.body);
    let { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        // .json({ message: "Missing required fields"});  
        throw new Error("All fields are mandatory !");
    }
    res.status(201).json({ message: "Create contact"});
});
/**
 * @description Update contact
 * @route PUT /api/contacts/:id
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`});
});

/**
 * @description Delete contact
 * @route DELETE /api/contacts/:id
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`});
});

module.exports = {
    getContacts: getContacts,
    getContact: getContact,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact
};
