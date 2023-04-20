const express = require("express");

const router = express.Router();

const { createContact, deleteContact, getContact, getContacts, updateContact } = require("../controllers/contact.controller");
const validateToken = require("../middleware/validateToken.handler");

router.use(validateToken);
router.route('/')
    .get(getContacts)
    .post(createContact);

router.route('/:id')
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;