const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const genderRoutes = require('./routes/genderRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/genders', genderRoutes);
app.use('/contacts', contactRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => console.log('Error syncing database: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
