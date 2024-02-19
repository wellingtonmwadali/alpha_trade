import React from "react";
import Navbar from "../../components/Dashboard/navbar";
import Sidebar from "../../components/Dashboard/sidebar";
import Brent from "../../assets/Brent.jpeg";
import CrudeOilBrentTable from "../../components/dataset/brentTable";
import Footer from "../../components/footer";

const CrudeBrent = () => {
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
              src={Brent}
              alt="crude oil prices"
              className="mt-4 md:h-3/4 md:w-3/4"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 bg-yellow-200 p-2 w-96 rounded-md text-center">
              Crude Oil(Brent) Prices
            </h1>
            <p className="text-lg">
              Brent Crude Oil, extracted from the North Sea's oilfields,
              occupies a fundamental position in the intricate web of global
              energy markets. Renowned as a crucial benchmark, Brent Crude
              significantly shapes economic landscapes, informs investment
              strategies, and influences geopolitical considerations on an
              international scale. This exploration delves into the profound
              significance, distinctive characteristics, and key factors that
              define the realm of Brent Crude Oil. Join us as we unravel the
              narrative of Brent Crude—a cornerstone in the intricate and
              dynamic world of global energy markets.<br></br>
              <br></br>
              Below is a table featuring the Crude Oil(Brent) prices from the
              year 1986 to 2023:
            </p>
          </div>
          <CrudeOilBrentTable />
          {/*DISCLAIMER*/}
          <div className="mt-12 flex justify-center">
            <div className="bg-yellow-200 rounded-lg p-4 w-2/3">
              <h2 className="font-bold text-2xl text-red-400">Disclaimer</h2>
              <p className="mt-4 font-medium">
                The data presented on this platform is sourced from the U.S.
                Energy Information Administration, specifically the dataset
                detailing Crude Oil Prices for Brent (Brent) sourced from
                Cushing, Oklahoma.This information is retrieved from FRED, the
                Federal Reserve Bank of St. Louis, utilizing the FRED® API but
                is not endorsed or certified by the Federal Reserve Bank of St.
                Louis. The Federal Reserve Bank of St. Louis does not endorse or
                guarantee the accuracy, completeness, or reliability of the data
                presented.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="mt-4 text-lg">
              Brent Crude oil is a major benchmark price for purchases of oil
              worldwide. While Brent Crude oil is sourced from the North Sea the
              oil production coming from Europe, Africa and the Middle East
              flowing West tends to be priced relative to this oil. The Brent
              prices displayed in Trading Economics are based on
              over-the-counter (OTC) and contract for difference (CFD) financial
              instruments. Our market prices are intended to provide you with a
              reference only, rather than as a basis for making trading
              decisions. Trading Economics does not verify any data and
              disclaims any obligation to do so
            </p>
            <h1 className="text-2xl font-bold mt-12">
              Factors Influencing Brent Crude Oil Prices:
            </h1>
            <p className="mt-4">
              Brent Crude Oil prices are subject to a myriad of intricate
              factors that span geopolitical complexities, economic trends, and
              the dynamics of global trade. This professional overview delves
              into the multifaceted elements that play a pivotal role in shaping
              the pricing dynamics of Brent Crude.
            </p>
            <h2 className="text-xl font-bold mt-12">
              {" "}
              Geopolitical Influences
            </h2>
            <h3 className="text-lg font-bold mt-4">Global Tensions:</h3>{" "}
            <p>
              Geopolitical tensions and conflicts in oil-producing regions have
              a pronounced impact on Brent Crude prices. Political instability,
              trade disputes, and diplomatic relations can lead to supply
              disruptions and subsequently influence pricing.
            </p>
            <h3 className="text-lg font-bold mt-4">OPEC Actions:</h3>
            <p>
              {" "}
              Decisions and actions by the Organization of the Petroleum
              Exporting Countries (OPEC) and its allies directly impact Brent
              Crude prices. Production cuts or increases, as determined by OPEC
              agreements, can significantly influence the global supply and
              demand balance.
            </p>
            <h2 className="text-xl font-bold mt-12">Economic Factors:</h2>
            <h3 className="text-lg font-bold mt-4">Global Demand:</h3>
            <p>
              The health of the global economy is intricately tied to Brent
              Crude prices. Economic expansions drive increased demand for oil,
              while contractions may result in reduced consumption, thereby
              affecting prices.
              <h3 className="text-lg font-bold mt-4">Currency Fluctuations:</h3>
              Changes in currency values, particularly the U.S. dollar, can
              impact Brent Crude prices. As oil is globally traded in dollars,
              fluctuations in currency values can influence the purchasing power
              of importing nations.
            </p>
            <h2 className="text-xl font-bold mt-12">Imports and Exports:</h2>
            <h3 className="text-lg font-bold mt-4">Global Trade Patterns:</h3>
            <p>
              In import and export patterns, especially among major
              oil-consuming nations, can impact the overall supply and demand
              balance, affecting prices accordingly.
            </p>
            <h3 className="text-lg font-bold mt-4">Transportation Costs:</h3>{" "}
            <p>
              The cost of transporting Brent Crude to various regions is a
              factor in its pricing. Infrastructure developments, logistical
              efficiency, and geopolitical considerations all contribute to
              transportation costs.
            </p>{" "}
            <h2 className="text-xl font-bold mt-12">Professional Insights:</h2>{" "}
            <h3 className="text-lg font-bold mt-4">Market Speculation:</h3>{" "}
            <p>
              Brent Crude prices are often influenced by market speculation.
              Traders, investors, and financial institutions engage in
              speculative activities based on diverse information, projections,
              and sentiments, contributing to short-term price fluctuations.
            </p>{" "}
            <h3 className="text-lg font-bold mt-4">Oil Market Dynamics:</h3>{" "}
            <p>
              Understanding the intricacies of the Brent Crude market involves
              considering factors such as oil storage capacities, refining
              capacities, and the overall structure of the oil market. These
              dynamics play a role in supply and demand equilibrium.
            </p>
            <div className="bg-yellow-200 mt-12 p-2 rounded-lg">
              <h2 className="font-bold text-xl mt-4 text-red-400">
                Conclusion
              </h2>{" "}
              <p className="text-lg">
                In conclusion, the pricing of Brent Crude Oil is a nuanced
                interplay of geopolitical, economic, and trade-related factors.
                A comprehensive understanding of these elements is essential for
                stakeholders in the energy sector, financial markets, and
                policymakers alike. As the global energy landscape continues to
                evolve, monitoring these factors remains critical for informed
                decision-making and navigating the complexities of the Brent
                Crude market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CrudeBrent;
