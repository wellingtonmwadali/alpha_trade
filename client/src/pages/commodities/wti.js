import React from "react";
import Navbar from "../../components/Dashboard/navbar";
import Sidebar from "../../components/Dashboard/sidebar";
import CrudeOil from "../../assets/CrudeOil.jpeg";
import OilPriceTable from "../../components/dataset/wtiTable";
import Footer from "../../components/footer";

const Wti = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Sidebar covering 1/5 of the width */}
        <Sidebar />

        {/* Main content covering 4/5 of the width */}
        <div className="md:flex md:flex-col md:w-4/5 p-2">
          {/* Content for WTI page */}
          <div className="flex justify-center">
            <img
              src={CrudeOil}
              alt="crude oil prices"
              className="mt-4 md:h-3/4 md:w-3/4"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-4 bg-yellow-200 p-2 w-96 rounded-md text-center">
              Crude Oil(WTI) Prices
            </h1>
            <p className="text-lg">
              Crude Oil, specifically West Texas Intermediate (WTI), holds a
              pivotal position in the world's energy markets. As one of the
              major benchmarks for oil pricing, WTI influences global economic
              dynamics, investment strategies, and geopolitical considerations.
              Here's an exploration of the significance, characteristics, and
              factors that shape the world of Crude Oil (WTI).<br></br>
              <br></br>
              Below is a table featuring the Crude Oil(WTI) prices from the year
              1986 to 2023:
            </p>
          </div>
          <OilPriceTable />
          {/*DISCLAIMER*/}
          <div className="mt-12 flex justify-center">
            <div className="bg-yellow-200 rounded-lg p-4 w-2/3">
              <h2 className="font-bold text-2xl text-red-400">Disclaimer</h2>
              <p className="mt-4 font-medium">
                The data presented on this platform is sourced from the U.S.
                Energy Information Administration, specifically the dataset
                detailing Crude Oil Prices for West Texas Intermediate (WTI)
                sourced from Cushing, Oklahoma.This information is retrieved
                from FRED, the Federal Reserve Bank of St. Louis, utilizing the
                FRED® API but is not endorsed or certified by the Federal
                Reserve Bank of St. Louis. The Federal Reserve Bank of St. Louis
                does not endorse or guarantee the accuracy, completeness, or
                reliability of the data presented.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-xl">Factors Influencing WTI Prices:</h1>
            <h2 className="mt-4 font-semibold text-lg">1. Supply and Demand Dynamics:</h2>
            <p>
              The global demand for oil, influenced by economic activities and
              industrial growth, plays a significant role in determining WTI
              prices. Supply disruptions, geopolitical tensions, and production
              decisions by major oil-producing countries contribute to market
              volatility.
            </p>
            <h2 className="mt-4 font-semibold text-lg">2. Market Speculation:</h2>
            <p>
              Traders and investors closely monitor WTI prices, engaging in
              market speculation based on economic indicators, political events,
              and forecasts. Speculative activities can lead to short-term
              fluctuations in oil prices.
            </p>
            <h2 className="mt-4 font-semibold text-lg">3. Technological Advancements:</h2>
            <p>
              Advances in drilling technologies, extraction methods, and
              exploration techniques impact the production capabilities of WTI.
              Innovations in the oil and gas industry can influence the overall
              supply of WTI in the market.
            </p>
            <h1 className="font-bold text-xl mt-12"> Economic and Geopolitical Impacts:</h1>
            <h2 className="mt-4 font-semibold text-lg">1. Global Economic Indicator:</h2>
            <p>
              The price of WTI is often viewed as an indicator of the overall
              health of the global economy. Rising or falling prices can reflect
              economic expansions or contractions, affecting industries,
              inflation rates, and consumer spending.
            </p>
            <h2 className="mt-4 font-semibold text-lg">2. Geopolitical Considerations:</h2>
            Geopolitical events, such as conflicts in oil-producing regions,
            trade agreements, and diplomatic relations, can significantly impact
            WTI prices. Political stability and disruptions in major
            oil-producing countries play a crucial role in shaping market
            dynamics.
            <h1 className="font-bold text-xl mt-12">Future Trends and Sustainability:</h1>
            <h2 className="mt-4 font-semibold text-lg">1. Renewable Energy Shift:</h2>
            <p>
              As the world transitions toward sustainable and renewable energy
              sources, the future of WTI and the entire oil industry faces
              challenges. The focus on reducing carbon emissions and embracing
              alternative energy solutions may reshape the energy landscape.
            </p>
            <h2 className="mt-4 font-semibold text-lg">2. Investments in Technology:</h2>
            <p>
              Continued investments in technology, including carbon capture and
              storage, can contribute to mitigating the environmental impact of
              oil extraction and refining processes. The industry's adaptability
              to cleaner technologies will likely influence its long-term
              viability.
            </p>
          <div className="bg-yellow-200 p-2 mt-12 rounded-lg">
          <h2 className="font-bold text-xl mt-4 text-red-400">Conclusion:</h2>
            <p className="text-lg">
              Crude Oil (WTI) stands at the intersection of global economics,
              geopolitics, and technological progress. Understanding its
              characteristics, price determinants, and broader implications is
              essential for stakeholders ranging from investors and traders to
              policymakers and environmental advocates. As the world navigates
              the complexities of energy transition, the role and future of WTI
              remain integral to the ongoing discourse on sustainable energy and
              economic development.
            </p>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Wti;
