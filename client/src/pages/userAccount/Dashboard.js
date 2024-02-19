import React from 'react';
import Navbar from '../../components/Dashboard/navbar';
import Sidebar from '../../components/Dashboard/sidebar';
import GridSystem from '../../components/grid';
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="md:w-4/5">
          <div className="mt-4">
            <h1 className="md:text-3xl text-2xl font-bold text-slate-700 ">
              Overview
            </h1>
            <p className="mt-4 font-light ">
              Welcome to the Alpha Trade Dashboard – your command center for
              real-time insights into the world of commodities and global
              markets. Our user-friendly interface consolidates live data on key
              commodities such as crude oil, copper, aluminum, and natural gas,
              empowering you with the information needed to make informed
              decisions. From interactive tables displaying price trends to
              comprehensive news updates impacting market dynamics, the
              dashboard seamlessly integrates diverse elements for a holistic
              understanding of the ever-evolving economic landscape. Whether
              you're a seasoned trader, investor, or industry enthusiast, Alpha
              Trade's Dashboard is your go-to platform for staying ahead of
              market trends and making strategic moves in the world of global
              trade and finance. Explore, analyze, and thrive with the power of
              knowledge at your fingertips. Welcome to a new era of informed
              decision-making.The commodities included in Alpha Trade include
              the following:
            </p>
          </div>
          <div className="mt-4">
            <GridSystem />
          </div>
          <div className="mt-4 bg-blue-200 rounded-sm mb-5">
            <p className='p-4 font-light'>
              The information provided on this platform, including commodity
              prices, market analyses, and news, is for informational purposes
              only. Alpha Trade strives to ensure the accuracy and reliability
              of the data presented, but we do not guarantee its completeness or
              suitability for any specific purpose.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Dashboard