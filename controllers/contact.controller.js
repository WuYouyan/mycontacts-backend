const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

/**
 * @description Get all contacts
 * @route GET /api/contacts
 * @access private
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const getContacts = asyncHandler(async (req, res) => {
    // res.send("Get all contacts");
    // res.json({ message: "Get all contacts"});
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

/**
 * @description Get contact
 * @route GET /api/contacts/:id
 * @access private
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const getContact = asyncHandler(async (req, res) => {
    const constact = await Contact.findById(req.params.id);
    if (!constact) {
        res.status(404);     
        throw new Error("Contact not found");
    }
    res.status(200).json(constact);
});

/**
 * @description Create contact
 * @route POST /api/contacts
 * @access private
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
    const contact = await Contact.create({
        user_id: req.user.id,
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});
/**
 * @description Update contact
 * @route PUT /api/contacts/:id
 * @access private
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const updateContact = asyncHandler(async (req, res) => {
    const constact = await Contact.findById(req.params.id);
    if (!constact) {
        res.status(404);     
        throw new Error("Contact not found");
    }
    if (constact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

/**
 * @description Delete contact
 * @route DELETE /api/contacts/:id
 * @access private
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const deleteContact = asyncHandler(async (req, res) => {
    const constact = await Contact.findById(req.params.id);
    if (!constact) {
        res.status(404);     
        throw new Error("Contact not found");
    }
    if (constact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    // await Contact.rem
    res.status(200).json(constact);
});

module.exports = {
    getContacts: getContacts,
    getContact: getContact,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact
};
