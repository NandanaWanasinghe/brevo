// routes/contactRoutes.js
const express = require('express');
const contactController = require('../controller/contactController');
const brevoController = require('../controller/brevoController');

const router = express.Router();

// Routes for local contacts
router.post('/contacts', contactController.createContact);

// Route for creating Brevo contact
router.post('/brevo-contacts', brevoController.createBrevoContact);

module.exports = router;
