// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get All Contacts' });
}

// @desc Get contact
// @route GET /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact by id ${req.params.id} ` });
}

// @desc create contact
// @route POST /api/contacts
// @access public

const createContact = (req, res) => {
    console.log("req body ", req.body)
    res.status(201).json({ message: 'Create contact' });
}

// @desc update contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact by id ${req.params.id}` });
}

// @desc  contacts
// @route DELETE /api/contacts
// @access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact by id ${req.params.id}` });
}


module.exports = { getContacts, getContact, updateContact, deleteContact, createContact };