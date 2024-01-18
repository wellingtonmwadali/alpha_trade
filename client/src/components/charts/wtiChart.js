import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudeOilTable = () => {
  const [crudeOilData, setCrudeOilData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/crude-oil-wti');
        setCrudeOilData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = crudeOilData.filter((entry) =>
    entry.Date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.Price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.PriceTrend.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search..."
        className="my-4 px-2 py-1 border border-gray-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2  border-b border border-blue-400">Date</th>
            <th className="py-2  border-b border border-blue-400">Price</th>
            <th className="py-2  border-b border border-blue-400">Price Trend</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry) => (
            <tr key={entry.Date}>
              <td className="py-2 px-4 border-b border border-blue-400 ">{entry.Date}</td>
              <td className="py-2 px-12 border-b border border-blue-400 text-center">{entry.Price}</td>
              <td
                className={`py-2 px-12 border-b border border-blue-400 text-center ${
                  entry.PriceTrend === 'Increase' ? 'text-green-500' : entry.PriceTrend === 'Decrease' ? 'text-red-500' : 'text-black'
                }`}
              >
                {entry.PriceTrend}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudeOilTable;









