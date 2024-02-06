// controllers/contactController.js
//const { Contact } = require('../model');
const Contact = require('../model/contactModel')

const createContact = async (req, res) => {

  try {
    const { email, firstName, lastName, phoneNumber } = req.body;

    const contact = await Contact.create({ 
        email, firstName, lastName, phoneNumber 
    });
    res.json({ message: 'Contact created successfully', contactId: contact.id });

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {createContact};