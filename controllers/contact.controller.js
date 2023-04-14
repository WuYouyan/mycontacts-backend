/**
 * @description Get all contacts
 * @route GET /api/contacts
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const getContacts = (req, res) => {
    // res.send("Get all contacts");
    // res.json({ message: "Get all contacts"});
    res.status(200).json({ message: "Get all contacts"});
};

/**
 * @description Get contact
 * @route GET /api/contacts/:id
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
};

/**
 * @description Create contact
 * @route POST /api/contacts
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @
 */
const createContact = (req, res) => {
    console.log("Create contact: ", req.body);
    res.status(201).json({ message: "Create contact"});
};
/**
 * @description Update contact
 * @route PUT /api/contacts/:id
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`});
};

/**
 * @description Delete contact
 * @route DELETE /api/contacts/:id
 * @access Public
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`});
}

module.exports = {
    getContacts: getContacts,
    getContact: getContact,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact
};
