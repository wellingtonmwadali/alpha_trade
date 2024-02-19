import React from 'react'
import Navbar from '../../components/Dashboard/navbar'
import Sidebar from '../../components/Dashboard/sidebar'
import GasTable from '../../components/dataset/gasTable'
import naturalgas from '../../assets/naturalgas.jpeg'
import Footer from '../../components/footer'

const Gas = () => {
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
              src={naturalgas}
              alt="crude oil prices"
              className="mt-4 md:h-3/4 md:w-3/4"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-4 bg-yellow-200 p-2 w-96 rounded-md text-center">
              Natural Gas
            </h1>
            <p className="text-lg">
              Natural gas stands as a cornerstone in the realm of commodities,
              boasting profound significance and distinctive characteristics
              that shape the intricate and dynamic world of global markets.
              Sourced from natural reservoirs and refined through complex
              procedures, natural gas emerges as a vital player in the energy
              sector. Its versatility positions it as a fundamental benchmark
              across diverse industries, ranging from power generation and
              heating to industrial processes. As a cleaner alternative to
              traditional fossil fuels, natural gas plays a pivotal role in the
              ongoing global transition towards sustainable energy solutions.
              Its widespread use is characterized by its efficiency, lower
              carbon emissions, and adaptability in various applications.
              Natural gas, akin to aluminium, symbolizes modern industry, and
              its exploration unveils key factors defining its influence and
              strategic importance within the ever-evolving global markets.
              <br></br>
              <br></br>
              Below is a table featuring the Crude Oil(WTI) prices from the year
              1986 to 2023:
            </p>
          </div>
          <GasTable />
          {/* DISCLAIMER */}
          <div className="mt-12 flex justify-center">
            <div className="bg-yellow-200 rounded-lg p-4 w-2/3">
              <h2 className="font-bold text-2xl text-red-400">Disclaimer</h2>
              <p className="mt-4 font-medium">
                The data presented on this platform is sourced from the U.S.
                Energy Information Administration, specifically the dataset
                detailing Crude Oil Prices for Natural Gas sourced from Cushing,
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
              Natural Gas, a cornerstone in the global energy landscape, plays a
              vital role in powering industries, heating homes, and fueling
              economic activities. Mined from natural reservoirs and distributed
              through an extensive network, Natural Gas is a versatile and
              efficient source of energy with significant implications for
              various sectors.
            </p>
            <h1 className="text-2xl font-bold mt-12">
              Unlocking Natural Gas's Business Potential:
            </h1>
            <p className="mt-4">
              1. <b>Clean and Efficient Energy Source:</b> Natural Gas stands
              out as one of the cleanest fossil fuels, emitting fewer greenhouse
              gases compared to other traditional energy sources. Businesses
              leveraging Natural Gas contribute to sustainability goals and
              environmental responsibility.<br></br>
              2.<b>Versatility Across Industries:</b> From electricity
              generation to industrial processes, Natural Gas's versatility
              makes it a preferred choice for businesses seeking reliable and
              cost-effective energy solutions.<br></br>
              3.<b> Cost-Effective Heating Solutions:</b> In the residential and
              commercial sectors, Natural Gas provides an affordable and
              efficient solution for heating, cooking, and other energy needs.
              <br></br>
              4. <b>Global Accessibility: </b>With abundant reserves and a
              well-established infrastructure, Natural Gas is readily available
              on a global scale, ensuring a stable and secure energy supply for
              businesses.
            </p>
            <h2 className="text-xl font-bold mt-12">
              Navigating the Natural Gas Market:
            </h2>
            <p className="mt-4">
              Natural Gas's impact on global markets is substantial, with
              various factors influencing its price dynamics. As of [Insert
              Date], the Natural Gas market data reveals [Insert Market Data
              Values], showcasing its resilience and adaptability in the
              ever-evolving business landscape.
            </p>
            <h2 className="text-xl font-bold mt-12">
              Strategic Insights and Business Opinions:
            </h2>
            <p className="mt-4">
              In the current business climate, Natural Gas emerges as a
              strategic asset for energy-intensive industries. Opinions from
              industry leaders suggest that businesses should [Insert Business
              Strategies], considering the long-term benefits of Natural Gas for
              energy security and sustainability.
            </p>
            <h2 className="text-xl font-bold mt-12">
              Market Trends and Data Snapshot (Up to April 2023):
            </h2>
            {/* Include relevant market reports, trends, and analysis here */}
            <p className="mt-4">
              Market trends in the natural gas sector are notably impacted by
              the increasing focus on cleaner energy sources. With a growing
              emphasis on reducing carbon emissions, natural gas is positioned
              as a transitional fuel, offering a lower-emission alternative to
              traditional fossil fuels. The rise of liquefied natural gas (LNG)
              as a globally traded commodity has reshaped the market, providing
              increased flexibility in transportation and storage.
            </p>
            <h2 className="text-xl font-bold mt-12">Global Trade Dynamics:</h2>
            {/* Discuss relevant news and trends in Natural Gas imports and exports */}
            <p className="mt-4">
              The global dynamics of the natural gas market are characterized by
              a complex interplay of geopolitical, economic, and environmental
              factors, shaping trends that have far-reaching implications.
              Geopolitically, natural gas is a key player in international
              relations, with major producers such as the United States, Russia,
              and Qatar influencing global supply dynamics. Economic factors,
              including demand from emerging economies and industrial
              applications, drive market fluctuations and investment decisions.
            </p>
            <h2 className="text-xl font-bold mt-12">
              Professional Perspectives:
            </h2>
            {/* Share professional opinions on the Natural Gas market */}
            <p className="mt-4">
              Analyzing the global natural gas market unveils key insights
              essential for strategic analytics. The increasing role of natural
              gas as a cleaner energy alternative has led to growing demand,
              driven by its use in power generation, heating, and as a feedstock
              in various industrial processes. Analytics professionals should
              closely monitor geopolitical developments, as natural gas markets
              are heavily influenced by regional dynamics and political
              decisions. Pricing volatility, often linked to supply-demand
              imbalances, weather patterns, and geopolitical tensions,
              underscores the importance of advanced analytics for risk
              management. Additionally, tracking advancements in liquefied
              natural gas (LNG) technology, storage infrastructure, and
              renewable natural gas initiatives provides valuable insights into
              future market trends. For analytics to be effective, a combination
              of historical data analysis, predictive modeling, and real-time
              monitoring will be instrumental in providing stakeholders with
              actionable intelligence for decision-making in this dynamic and
              evolving natural gas landscape.
            </p>
            <div className="bg-yellow-200 mt-12 p-4 rounded-lg">
              <h2 className="text-xl font-bold mt-4 text-red-400">
                Conclusion
              </h2>
              <p className="mt-4 text-lg">
                In conclusion, Natural Gas remains a pivotal player in the
                global energy landscape. As businesses seek sustainable and
                efficient energy solutions, Natural Gas stands out as a reliable
                and cost-effective option. Overall, the global dynamics of the
                natural gas market are undergoing significant changes as it
                adapts to geopolitical shifts, embraces cleaner energy trends,
                and navigates the challenges and opportunities presented by the
                ongoing global energy transition.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Gas      