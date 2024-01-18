import React from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import CrudeOil from '../../assets/CrudeOil.jpeg'
import OilPriceTable from '../../components/charts/wtiChart';

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
        <div className='flex justify-center'>
          <img src={CrudeOil} alt="crude oil prices"
          className='mt-4 md:h-3/4 md:w-3/4' />
        </div>
        <div className="mt-4">
            <h1 className="text-3xl font-bold mb-4 bg-yellow-200 p-2 w-96 rounded-md text-center">Historical WTI Oil Prices</h1>
            <p className="text-lg">
              Explore the historical prices of WTI (West Texas Intermediate) crude oil. 
              Analyze trends, patterns, and make informed decisions for your investments.
            </p>
            </div>
            <OilPriceTable/>    
      </div>
    </div>
    </>
  );
  
};




export default Wti