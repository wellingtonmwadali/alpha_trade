//This file gets the Copper end point from Alpha Vintage Key
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Alpha Vantage Copper API key
const apiKey = 'TWTEUE9DFN11TMNZ';

//route
router.get('/copper', async (req, res) => {
  console.log('Copper endpoint');
  try {
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=${apiKey}`;

    const response = await axios.get(alphaVantageUrl);
    const historicalPrices = response.data.data;

    const formattedData = historicalPrices.map(price => ({
      Title: `Copper Price`,
      Date: new Date(price.date).toDateString(),
      Price: price.value,
    }));
    

    // Sort data by date in descending order (from latest to oldest)
    const sortedData = formattedData.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json(sortedData);
  } catch (error) {
    console.error(error);

    // Check if the error is due to the Alpha Vantage API response
    if (error.response && error.response.data) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

module.exports = router;