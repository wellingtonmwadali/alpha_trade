import React, { useState, useEffect } from "react";
import axios from "axios";

const Loader = () => (
  <div className="flex justify-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
  </div>
);

const Copper = () => {
  const [crudeOilData, setCrudeOilData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://alpha-trade.onrender.com/api/copper"
        );
        setCrudeOilData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="w-full mx-auto p-2 border border-gray-300 my-8">
        <div className="border-b border-gray-300 mb-2 p-2  bg-slate-100">
          <h1 className="text-xl font-bold">Copper Overview</h1>
        </div>

        <div>
          <p className="font-normal">
            Copper holds a vital role as a global commodity benchmark, impacting
            transactions worldwide. Sourced globally, its pricing intricately
            links to its pivotal role in various industries. Trading Economics,
            a reliable platform, provides market prices based on
            over-the-counter (OTC) and contract for difference (CFD) financial
            instruments. View these prices as valuable references, guiding
            insights into the dynamic copper market. While offering
            transparency, users are encouraged to approach data with prudence,
            understanding it as a tool for informed decision-making.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="table-auto min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-400">
                <th className="py-2 border-b font-light md:font-bold border border-gray-300">
                  Actual
                </th>
                <th className="py-2 border-b font-light md:font-bold  border border-gray-300">
                  Previous
                </th>
                <th className="py-2 border-b font-light md:font-bold  border border-gray-300">
                  Margin
                </th>
                <th className="py-2 border-b font-light md:font-bold  border border-gray-300">
                  Highest
                </th>
                <th className="py-2 border-b font-light md:font-bold  border border-gray-300">
                  Lowest
                </th>
                <th className="py-2 border-b font-light md:font-bold  border border-gray-300">
                  Unit
                </th>
                <th className="py-2 border-b font-light md:font-bold  border border-gray-300">
                  Frequency
                </th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader /> // Display loader while data is loading
            ) : (
              <tbody>
                {crudeOilData.slice(0, 1).map((entry) => (
                  <tr key={entry.Date}>
                    <td className="md:py-2 md:text-center border-b  font-light md:font-semibold border border-gray-300">
                      {entry.Price}
                    </td>
                    <td className="md:py-2 md:text-center border-b  font-light md:font-semibold border border-gray-300">
                      {entry.Previous}
                    </td>
                    <td className="md:py-2 md:text-center border-b  font-light md:font-semibold border border-gray-300">
                      {entry.priceChange}
                    </td>
                    <td className="md:py-2 md:text-center border-b  font-light md:font-semibold border border-gray-300">
                      {entry.Highest}
                    </td>
                    <td className="md:py-2 md:text-center font-light md:font-semibold border-b border-gray-300">
                      {entry.Lowest}
                    </td>
                    <td className="md:py-2 md:text-center font-light md:font-semibold border-b  border border-gray-300">
                      {entry.Unit}
                    </td>
                    <td className="md:py-2 md:text-center border-b  border border-gray-300">
                      {entry.collectionPeriod}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Copper;
