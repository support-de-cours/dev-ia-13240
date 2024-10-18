"use strict";

// Import de librairie
// --
const express = require('express');
const router = express.Router();



// Importer les contrôleurs
// --

const homeController = require('./../src/Controllers/HomeController');
const aboutController = require('./../src/Controllers/AboutController');
const contactController = require('../src/Controllers/ContactController');



// Définir les routes
// --

router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);
router.get('/contact', contactController.getContact);



// Exporter les routes
// --

module.exports = router;
