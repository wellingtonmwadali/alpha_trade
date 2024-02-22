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
const news = require('./routes/news');



dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

// cors
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
app.use('/api', news);


// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal server error' });
// });


// Connect to MongoDB
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schema
// Destructure Schema and ObjectId from mongoose
const { Schema, ObjectId } = mongoose;

// Define the schema
const userSchema = new Schema({
  id: { type: ObjectId, required: true },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true
  }
});

// Model
const userModel = mongoose.model('user', userSchema);

// Newsletter Subscription Schema
const newsletterSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

// Newsletter Subscription Model
const NewsletterSubscription = mongoose.model('NewsletterSubscription', newsletterSchema);

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Signup API
app.post('/signup', async (req, res) => {
  console.log(req.body);
  // Check if email is already in the database or new email
  const { email } = req.body;

  const result = await userModel.findOne({ email: email }).exec();
  console.log(result);
  if (result) {
    res.send({ message: 'Email already registered', alert: false });
  } else {
    const data = userModel(req.body);
    const save = await data.save();
    res.send({ message: 'Signed up successfully', alert: true });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email } = req.body;
  const result = await userModel.findOne({ email: email }).exec();
  if (result) {
    const dataSend = {
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
    };
    console.log(dataSend);
    res.send({ message: 'Login is successful', alert: true, data: dataSend });
  } else {
    res.send({
      message: 'Email is not registered/Please signup',
      alert: false,
    });
  }
});

// Newsletter Subscription endpoint
app.route('/subscribe')

.post(async (req, res) => {
  try {
    const { email } = req.body;
   // Validate email
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (!emailRegex.test(email)) {
  res.status(400).send({ message: 'Invalid email format', alert: false });
  return;
}

    
    // Check if email is already subscribed
    const subscriptionResult = await NewsletterSubscription.findOne({ email: email }).exec();
    if (subscriptionResult) {
      res.send({ message: 'Email is already subscribed', alert: false });
    } else {
      const newSubscription = new NewsletterSubscription({ email: email });
      await newSubscription.save();
      res.send({ message: 'Subscribed successfully', alert: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
