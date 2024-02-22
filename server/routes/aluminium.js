//This file gets the Aluminium end point from Alpha Vintage Key
const express = require("express");
const axios = require("axios");
const router = express.Router();

// Alpha Vantage Aluminium API key
const apiKey = "WYHP0K4BAN7VXKM9";

//route
router.get("/aluminium", async (req, res) => {
  console.log("Aluminium endpoint");
  try {
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=${apiKey}`;

    const response = await axios.get(alphaVantageUrl);
    const historicalPrices = Object.values(response.data.data);

    // Filter out invalid values and parse remaining values as floats
    const validPrices = historicalPrices
      .filter((price) => !isNaN(parseFloat(price.value)))
      .map((price) => parseFloat(price.value));

    // Calculate highest and lowest prices within the entire period
    const priceHigh = validPrices.length > 0 ? Math.max(...validPrices) : 0;
    const priceLow = validPrices.length > 0 ? Math.min(...validPrices) : 0;

    const formattedData = historicalPrices.map((price, index) => {
      const currentPrice = price.value;
      // const previousPrice =
      //   index > 0 ? historicalPrices[index - 1].value : currentPrice;
      if (index === 0) {
        // For the first entry, set previousPrice equal to the value of the second entry
        previousPrice = historicalPrices[1].value;
      } else {
        // For all other entries, set previousPrice equal to the value of the second entry
        previousPrice = historicalPrices[1].value;
      }
      const priceChange = parseFloat(currentPrice - previousPrice);
      const priceMargin = parseFloat(
        ((currentPrice - previousPrice) / previousPrice) * 100
      );
      const priceTrend =
        index > 0 ? (priceMargin > 0 ? "Increase" : "Decrease") : "Neutral";

      return {
        Title: `Aluminium Price`,
        Date: new Date(price.date).toDateString(),
        Price: parseFloat(currentPrice).toFixed(2),
        Previous: parseFloat(previousPrice).toFixed(2),
        Unit: "USD",
        priceChange: priceChange.toFixed(2),
        PriceTrend: priceTrend,
        PriceMargin: priceMargin.toFixed(2) + "%",
        Highest: priceHigh.toFixed(2),
        Lowest: priceLow.toFixed(2),
        collectionPeriod: "1976 to 2023",
        Frequency: "Monthly",
      };
    });

    // Sort data by date in descending order (from latest to oldest)
    const sortedData = formattedData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    res.json(sortedData);
  } catch (error) {
    console.error(error);

    // Check if the error is due to the Alpha Vantage API response
    if (error.response && error.response.data) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
