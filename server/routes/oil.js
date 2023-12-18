// routes/oil.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Access key
const accessKey = 'TIZE4XDAI5D4C2RA';
const symbol = 'TIZE4XDAI5D4C2RA';

router.get('/oil-price', async (req, res) => {
  console.log('Reached oil-price endpoint');
  try {
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${accessKey}`;

    const response = await axios.get(alphaVantageUrl);
    const crudeOilPrice = response.data['Global Quote']['05. price'];

    res.json({ crudeOilPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
