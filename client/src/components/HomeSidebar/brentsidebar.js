import React, { useState, useEffect } from "react";
import axios from "axios";

const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
  </div>
);

const BrentSidebar = () => {
  const [crudeOilData, setCrudeOilData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://alpha-trade.onrender.com/api/crude-oil-brent"
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
      <div className="w-full mx-auto p-2 border border-gray-300 my-3 bg-slate-200 ">
        <div className="border-b border-gray-300 mb-2 p-2  bg-slate-100">
          <h1 className="text-xl font-bold">Crude Oil(Brent)</h1>
        </div>

        <div className="mt-2">
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-400">
                <th className="py-1 border-b border border-gray-300 ">
                  Actual
                </th>
                <th className="py-1 border-b border border-gray-300 ">
                  Previous
                </th>
                <th className="py-1 border-b border border-gray-300 ">
                  Margin
                </th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader /> // Display loader while data is loading
            ) : (
              <tbody>
                {crudeOilData.slice(0, 6).map((entry) => (
                  <tr key={entry.Date}>
                    <td className="py-1 px-2 border-b  border border-gray-300  ">
                      {entry.Price}
                    </td>
                    <td className="py-1 px-2 border-b  border border-gray-300 ">
                      {entry.Previous}
                    </td>
                    <td className="py-1 px-2 border-b  border border-gray-300">
                      {entry.PriceMargin}
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

export default BrentSidebar;
