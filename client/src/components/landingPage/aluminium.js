import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Loader = () => (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
    </div>
  );

const   Aluminium = () => {
  const [crudeOilData, setCrudeOilData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/aluminium');
      setCrudeOilData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  fetchData();
}, []);
  return (
    <div>
      <div className="w-full mx-auto p-2 border border-gray-300 my-8">
        <div className="border-b border-gray-300 mb-2 p-2  bg-slate-100">
          <h1 className="text-xl font-bold">Aluminium Overview</h1>
        </div>

        <div>
          <p className="font-normal">
            Aluminium assumes a pivotal role as a global commodity benchmark,
            shaping transactions across the world. Sourced globally, its pricing
            intricately connects to its vital function in diverse industries.
            Trading Economics, a trusted platform, discloses market prices based
            on over-the-counter (OTC) and contract for difference (CFD)
            financial instruments. Regard these prices as invaluable references,
            offering insights into the dynamic aluminium market..
          </p>
        </div>

        <div className="mt-8">
     
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 border-b border-gray-300">Actual</th>
                <th className="py-2 border-b border-gray-300">Previous</th>
                <th className="py-2 border-b border-gray-300">Margin</th>
                <th className="py-2 border-b border-gray-300">Highest</th>
                <th className="py-2 border-b border-gray-300">Lowest</th>
                <th className="py-2 border-b border-gray-300">Unit</th>
                <th className="py-2 border-b border-gray-300">Frequency</th>
              </tr>
            </thead>
            {isLoading ? (
        <Loader /> // Display loader while data is loading
      ) : (
            <tbody>
              {crudeOilData.slice(0, 1).map((entry) => (
                <tr key={entry.Date}>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {entry.Price}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {entry.Previous}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {entry.priceChange}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {entry.Highest}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {entry.Lowest}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {entry.Unit}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
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
}

export default Aluminium