//This file gets the Crude Oil(Brent) end point from Alpha Vintage Key
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Alpha Vantage Crude Oil(Brent) API key
const apiKey = 'LNW1FXJ59PABHFJ7';

//route
router.get('/crude-oil-brent', async (req, res) => {
  console.log('crude oil(BRENT) endpoint');
  try {
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=${apiKey}`;

    const response = await axios.get(alphaVantageUrl);
    const historicalPrices = Object.values(response.data.data);

        // Calculate highest and lowest prices within the entire period
        const priceHigh = Math.max(...historicalPrices.map((price) => price.value));
        const priceLow = Math.min(...historicalPrices.map((price) => price.value));
    
   
     const formattedData = historicalPrices.map((price, index) => {
         const currentPrice = price.value;
        //  const previousPrice = index > 0 ? historicalPrices[index - 1].value : currentPrice;
        if (index === 0) {
          // For the first entry, set previousPrice equal to the value of the second entry
          previousPrice = historicalPrices[1].value;
        } else {
          // For all other entries, set previousPrice equal to the value of the second entry
          previousPrice = historicalPrices[1].value;
        }
         const priceChange = parseFloat(currentPrice - previousPrice)
         const priceMargin = parseFloat(((currentPrice - previousPrice)/ previousPrice) * 100);
         const priceTrend = index > 0 ? (priceMargin > 0 ? "Increase" : "Decrease") : "Neutral";
         
   
         return {
           Title: `Crude Oil(Brent) Price`,
           Date: new Date(price.date).toDateString(),
           Price: parseFloat(currentPrice),
           Previous: parseFloat(previousPrice).toFixed(2),
           Unit: "USD/BBL",
           priceChange : priceChange.toFixed(2),
           PriceTrend: priceTrend,
           PriceMargin: priceMargin.toFixed(2) + '%',
           Highest: parseFloat(priceHigh).toFixed(2),
           Lowest: parseFloat(priceLow).toFixed(2),
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