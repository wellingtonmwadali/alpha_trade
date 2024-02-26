import React from "react";

const GridSystem = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Brent Crude Oil */}
      <div className="bg-blue-200 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Brent Crude Oil</h2>
        <p className="text-sm">
          Brent Crude is a major benchmark for oil pricing, sourced from the
          North Sea. It plays a pivotal role in global energy markets.
        </p>
      </div>

      {/* WTI Crude Oil */}
      <div className="bg-green-200 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">WTI Crude Oil</h2>
        <p className="text-sm">
          WTI Crude Oil is another essential benchmark, sourced mainly from the
          United States. It influences global economic dynamics and investment
          strategies.
        </p>
      </div>

      {/* Copper */}
      <div className="bg-yellow-200 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Copper</h2>
        <p className="text-sm">
          Copper is a vital industrial metal with applications in various
          sectors. Its pricing reflects economic trends and global demand.
        </p>
      </div>

      {/* Natural Gas */}
      <div className="bg-red-200 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Natural Gas</h2>
        <p className="text-sm">
          Natural Gas is a significant energy source. Understanding its market
          dynamics is crucial for industries and consumers alike.
        </p>
      </div>

      {/* Aluminium */}
      <div className="bg-purple-200 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Aluminium</h2>
        <p className="text-sm">
          Aluminium is a key material in various industries. Exploring its
          market trends provides insights into global trade and economic
          activities.
        </p>
      </div>
    </div>
  );
};

export default GridSystem;
