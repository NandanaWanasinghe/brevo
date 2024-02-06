// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sync the Sequelize model with the database
sequelize.sync().then(() => {
  console.log('Sequelize models synced with the database');
}).catch((error) => {
  console.error('Error syncing Sequelize models:', error);
});

// Use contact routes
app.use('/', contactRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
