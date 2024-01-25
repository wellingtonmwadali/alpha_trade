//This file gets the Aluminium end point from Alpha Vintage Key
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Alpha Vantage Aluminium API key
const apiKey = 'WYHP0K4BAN7VXKM9';

//route
router.get('/aluminium', async (req, res) => {
  console.log('Aluminium endpoint');
  try {
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=${apiKey}`;

    const response = await axios.get(alphaVantageUrl);
    const historicalPrices = response.data.data;

        // Calculate highest and lowest prices within the entire period
        const priceHigh = Math.max(...historicalPrices.map((price) => price.value));
        const priceLow = Math.min(...historicalPrices.map((price) => price.value));
    
   
     const formattedData = historicalPrices.map((price, index) => {
         const currentPrice = price.value;
         const previousPrice = index > 0 ? historicalPrices[index - 1].value : currentPrice;
         const priceChange = parseFloat(currentPrice - previousPrice)
         const priceMargin = parseFloat(((currentPrice - previousPrice)/ previousPrice) * 100);
         const priceTrend = index > 0 ? (priceMargin > 0 ? "Increase" : "Decrease") : "Neutral";
         
   
         return {
           Title: `Aluminium Price`,
           Date: new Date(price.date).toDateString(),
           Price: parseFloat(currentPrice),
           Unit: "USD",
           priceChange : priceChange,
           PriceTrend: priceTrend,
           PriceMargin: priceMargin.toFixed(2) + '%',
           Highest: parseFloat(priceHigh),
           Lowest: parseFloat(priceLow),
           collectionPeriod: "1976 to 2023",
           Frequency: "Monthly",
   
          
         };
       });
    

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