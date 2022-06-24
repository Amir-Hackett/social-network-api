const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    // MongoDB will find and connect to the database if it exists or create the database if it doesn't
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));