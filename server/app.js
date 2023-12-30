const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const crudeOil = require('./routes/oil');
const naturalGas = require('./routes/gas');
const brent = require('./routes/brent');
const copper = require('./routes/copper');
const aluminium = require('./routes/aluminium');



dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

//cors
app.use(cors());


// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api', crudeOil);
app.use('/api', naturalGas);
app.use('/api', brent);
app.use('/api', copper);
app.use('/api', aluminium);

// Connect to MongoDB
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
