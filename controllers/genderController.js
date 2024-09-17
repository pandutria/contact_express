const Gender = require('../models/gender.js');

exports.getAllGenders = async (req, res) => {
    try {
        const genders = await Gender.findAll();
        res.json(genders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createGender = async (req, res) => {
    try {
        const gender = await Gender.create(req.body);
        res.json(gender);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
