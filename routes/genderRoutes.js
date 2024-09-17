const express = require('express');
const router = express.Router();
const genderController = require('../controllers/genderController.js');

router.get('/files', genderController.getAllGenders);
router.post('/', genderController.createGender);

module.exports = router;
