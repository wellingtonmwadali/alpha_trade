const express = require('express');
const axios = require('axios');
const router = express.Router();

// News Alpha Vantage API key
const apiKey = 'L1B09E8DNBCXGBH2';
const topics = 'energy_transportation';
const economics = 'economy_monetary';
const retail =  'retail_wholesale';
const manufacturing = 'manufacturing';

router.get('/news', async (req, res) => {
  console.log('news endpoint');
  try {
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${topics}&economics=${economics}&retail=${retail}&manufacturing=${manufacturing}&apikey=${apiKey}`;

    const response = await axios.get(alphaVantageUrl);
    const newsData = response.data;

    res.json(newsData);
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
