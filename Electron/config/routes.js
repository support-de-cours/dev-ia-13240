"use strict";

const express = require('express');
const router = express.Router();

const homepageController = require('../Controllers/HomepageController');

router.get('/', homepageController.getHome);
router.get('/page2', homepageController.getPage2);


module.exports = router;