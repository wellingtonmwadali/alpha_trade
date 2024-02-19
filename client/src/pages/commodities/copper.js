import React from 'react'
import Navbar from '../../components/Dashboard/navbar'
import Sidebar from '../../components/Dashboard/sidebar'
import copper from '../../assets/copper.jpeg';
import CopperTable from '../../components/dataset/copperTable';
import Footer from '../../components/footer';

const Copper = () => {
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
              src={copper}
              alt="crude oil prices"
              className="mt-4 md:h-1/2 md:w-1/2"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-4 bg-yellow-200 p-2 w-96 rounded-md text-center">
              Copper
            </h1>
            <p className="text-lg">
              Copper, often referred to as "Dr. Copper" for its predictive
              qualities regarding economic health, stands as a cornerstone in
              the expansive realm of global commodity markets. Much like Crude
              Oil (WTI) in the energy sector, copper holds a pivotal position,
              influencing economic trends, industrial activities, and global
              trade strategies..<br></br>
              <br></br>
              Below is a table featuring the Copper prices from the year 1986 to
              2023:
            </p>
          </div>
          <CopperTable />
          {/* DISCLAIMER */}
          <div className="mt-12 flex justify-center">
            <div className="bg-yellow-200 rounded-lg p-4 w-2/3">
              <h2 className="font-bold text-2xl text-red-400">Disclaimer</h2>
              <p className="mt-4 font-medium">
                The data presented on this platform is sourced from the U.S.
                Energy Information Administration, specifically the dataset
                detailing Crude Oil Prices for Copper sourced from Cushing,
                Oklahoma.This information is retrieved from FRED, the Federal
                Reserve Bank of St. Louis, utilizing the FRED® API but is not
                endorsed or certified by the Federal Reserve Bank of St. Louis.
                The Federal Reserve Bank of St. Louis does not endorse or
                guarantee the accuracy, completeness, or reliability of the data
                presented.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="mt-4 text-lg">
              Copper, often referred to as "Dr. Copper" for its predictive
              qualities regarding economic health, stands as a cornerstone in
              the expansive realm of global commodity markets. Much like Crude
              Oil (WTI) in the energy sector, copper holds a pivotal position,
              influencing economic trends, industrial activities, and global
              trade strategies.
            </p>
            <h1 className="text-2xl font-bold mt-12">
              Factors Influencing Copper Prices:
            </h1>
            <p className="mt-4">
              Copper prices are subject to a myriad of intricate factors that
              span economic indicators, global trade dynamics, and technological
              advancements. This professional overview delves into the
              multifaceted elements that play a pivotal role in shaping the
              pricing dynamics of copper.
            </p>
            <h2 className="text-xl font-bold mt-12"> Economic Indicators</h2>
            <h3 className="text-lg font-bold mt-4">Global Demand:</h3>{" "}
            <p>
              Copper prices are sensitive to economic indicators such as GDP
              growth, manufacturing output, and construction activities.
              Positive economic trends generally drive increased demand for
              copper.
            </p>
            <h3 className="text-lg font-bold mt-4">Global Trade Dynamics:</h3>
            <p>
              Copper is a globally traded commodity, and its prices are
              influenced by international trade patterns, tariffs, and supply
              chain disruptions.
            </p>
            <h3 className="text-lg font-bold mt-4">
              Technological Advancements:
            </h3>{" "}
            <p>
              Developments in technology and innovations that increase the use
              of copper in emerging sectors, such as electric vehicles and
              renewable energy, can impact demand and prices.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Imports and Exports (2023):</h3>
              <p>
                - <span className="font-medium">Global Copper Exports</span> The
                export data for 2023 indicated a significant movement of copper
                across borders, impacting supply and demand dynamics. Countries
                with major copper-producing regions contributed significantly to
                global exports.<br></br>-{" "}
                <span className="font-medium">Global Copper Imports</span>Import
                patterns in 2023 highlighted the demand for copper in various
                regions. Major consumer nations played a pivotal role in shaping
                the overall market dynamics.<br></br>-{" "}
                <span className="font-medium">Trade Balances</span> Examining
                the trade balances of key copper producers and consumers
                provided insights into the global supply and demand equilibrium.
              </p>
            </div>
            <h3 className="text-lg font-bold mt-4">
              Professional Indights:
            </h3>{" "}
            <p>
              In delving into the analytics of the global copper market, several
              key insights emerge to guide strategic decision-making. The robust
              demand for copper, driven by its essential role in electrical and
              electronic applications, positions it as a critical commodity in a
              technologically advancing world. The increasing electrification of
              industries, renewable energy projects, and electric vehicles
              underscores copper's indispensability. Analytically, monitoring
              supply dynamics, especially in major copper-producing nations like
              Chile and Peru, becomes crucial due to their dominance in global
              production. Additionally, the market's sensitivity to geopolitical
              factors, labor disputes, and environmental regulations
              necessitates a vigilant approach in risk assessment. Technological
              trends, such as the integration of copper in emerging 5G
              infrastructure, further contribute to sustained demand. For
              analytics professionals, a comprehensive understanding of these
              factors, coupled with predictive modeling and real-time data
              analysis, will be instrumental in navigating the complexities of
              the global copper market and providing actionable insights for
              stakeholders across the supply chain.
            </p>
            <div className="bg-yellow-200 mt-12 p-2 rounded-lg">
              <h2 className="font-bold text-xl mt-4 text-red-400">
                Conclusion
              </h2>{" "}
              <p className="text-lg">
                In conclusion, understanding the intricate interplay of economic
                indicators, global trade dynamics, and technological
                advancements is essential for stakeholders navigating the
                complexities of the copper market. As we move forward, copper's
                enduring importance in various industries positions it as a key
                player in the ongoing evolution of the global economy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Copper