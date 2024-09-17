const Contact = require('../models/contact.js');
const Gender = require('../models/gender.js');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll({ include: Gender });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.update(req.body, { where: { id } });
        if (contact[0]) {
            res.json({ message: 'Contact updated successfully' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Contact.destroy({ where: { id } });
        if (deleted) {
            res.json({ message: 'Contact deleted successfully' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
