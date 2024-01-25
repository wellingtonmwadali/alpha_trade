import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudeOilBrentTable = () => {
  const [crudeOilBrentData, setCrudeOilBrentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFullTable, setShowFullTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/brent');
        setCrudeOilBrentData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to filter data for the past 12 months or full table
  const filterData = () => {
    const currentDate = new Date();
    const past12Months = new Date();
    past12Months.setMonth(currentDate.getMonth() - 13);

    const filteredData = crudeOilBrentData.filter(entry => new Date(entry.Date) >= past12Months);

    return showFullTable ? crudeOilBrentData : filteredData;
  };

  // Function to filter data based on search term
  const filteredData = filterData().filter((entry) =>
    entry.Date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.Price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.PriceTrend.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search price value for specific year from 1986..."
        className="my-4 px-2 py-2 border border-gray-300 w-full rounded-lg text-center "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex justify-center'>
        <button
          className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md"
          onClick={() => setShowFullTable(!showFullTable)}
        >
          {showFullTable ? 'View Past 12 Months' : 'View Full Table'}
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
        <tr>
            <th className="py-2  border-b border border-blue-400">Date</th>
            <th className="py-2  border-b border border-blue-400">Price</th>
            <th className="py-2  border-b border border-blue-400">Unit</th>
            <th className="py-2  border-b border border-blue-400">Trend</th>
            <th className="py-2  border-b border border-blue-400">Margin</th>
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
              <td
                className={`py-2  border-b border border-blue-400 text-center `}
              >
                {entry.PriceMargin}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudeOilBrentTable;