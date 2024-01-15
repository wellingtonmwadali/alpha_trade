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
app.use('/api', news);

// Connect to MongoDB
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
//Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
});

//model
const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// signup api
app.post("/signup", async (req, res) => {
  console.log(req.body);
  //check if email is already in database or new email
  const { email } = req.body;

  const result = await userModel.findOne({ email: email }).exec();
  console.log(result);
  if (result) {
    res.send({ message: "Email already registered", alert: false });
  } else {
    const data = userModel(req.body);
    const save = await data.save();
    res.send({ message: "Signed up successfully", alert: true });
  }
});

//login endpoint
app.post("/login", async (req, res) => {
  const { email } = req.body;
  const result = await userModel.findOne({ email: email }).exec();
  if (result) {
    const dataSend = {
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
    };
    console.log(dataSend);
    res.send({ message: "login is successful", alert: true, data: dataSend });
  } else {
    res.send({
      message: "Email is not registered/Please signup",
      alert: false,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
