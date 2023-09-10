const asyncHandler = require('express-async-handler');
// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get All Contacts' });
})

// @desc Get contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact by id ${req.params.id} ` });
})

// @desc create contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
    console.log("req body ", req.body)
    const { name, email, phone } = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error('All Fields are mandatory');
    }
    res.status(201).json({ message: 'Create contact' });
})

// @desc update contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update contact by id ${req.params.id}` });
})

// @desc  contacts
// @route DELETE /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete contact by id ${req.params.id}` });
})


module.exports = { getContacts, getContact, updateContact, deleteContact, createContact };