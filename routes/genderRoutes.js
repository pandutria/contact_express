const express = require('express');
const router = express.Router();
const genderController = require('../controllers/genderController');

router.get('/', genderController.getAllGenders);
router.post('/', genderController.createGender);

module.exports = router;
