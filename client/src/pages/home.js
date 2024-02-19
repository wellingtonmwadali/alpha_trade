import React from "react";
import Header from "../components/header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import commoditiesImages from "../assets/commodity-images.jpg";
import commodityOutlook from "../assets/commodity-outlook.jpg";
import crudeOilImage from "../assets/crude-oil-image.webp";
import CrudeOilWti from "../components/landingPage/crudeWti";
import CrudeOilBrent from "../components/landingPage/crudeBrent";
import Copper from "../components/landingPage/copper";
import NaturalGas from "../components/landingPage/naturalGas";
import Aluminium from "../components/landingPage/aluminium";
import WtiSidebar from "../components/HomeSidebar/wtisidebar";
import BrentSidebar from "../components/HomeSidebar/brentsidebar";
import NaturalGasSidebar from "../components/HomeSidebar/naturalgasSidebar";
import CopperSidebar from "../components/HomeSidebar/copperSidebar";
import AluminiumSidebar from "../components/HomeSidebar/aluminiumSidebar";
import Newsletter from "../components/newsletter";
import NewsList from "../components/newslist";
import Footer from "../components/footer";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // 2.5 seconds
  };

  return (
    <>
      <div>
        <Header />
        <div className="mt-4 md:w-2/4  mx-auto backdrop-filter backdrop-blur-lg p-4">
          <Slider {...sliderSettings}>
            <div className="relative ">
              <img
                src={commoditiesImages}
                alt="Commodities"
                className="w-full h-96 rounded-lg "
              />
            </div>
            <div className="relative ">
              <img
                src={commodityOutlook}
                alt="Commodity Outlook"
                className="w-full h-96 rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src={crudeOilImage}
                alt="Crude Oil"
                className="w-full h-96 rounded-lg"
              />
            </div>
          </Slider>
        </div>
        <div className="md:p-2 mt-4 ">
          <h1 className="text-4xl p-2 font-semibold text-gray-600 border bg-slate-200 md:w-1/3 text-center">
            ALPHA TRADE
          </h1>
          <p className="font-light text-xl p-4 border">
            Welcome to Alpha Trade, where we transform complex commodity data
            into intuitive insights. At Alpha Trade, we understand that
            navigating the world of commodities requires more than just numbers;
            it demands clarity, accessibility, and a touch of innovation. As a
            leading platform, we specialize in monitoring and displaying
            real-time information on key commodities, offering a unique and
            user-friendly experience.
          </p>
        </div>
        <div className="mt-8 bg-slate-200 ">
          <h1 className="mb:text-4xl text-3xl font-bold flex justify-center py-4">
            Our Distinctive Features<span className="text-red-400 "> :</span>
          </h1>
          <div className="md:flex flex-wrap justify-center p-8 gap-8">
            <div className="md:w-1/4 p-4 border border-gray-300 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">Real-Time Insights</h2>
              <p className="text-gray-700">
                Experience the pulse of the market with our real-time updates.
                Whether you're tracking Crude Oil (WTI), Crude Oil (Brent),
                Aluminium, Copper, or Natural Gas, our platform provides you
                with the latest data at your fingertips.
              </p>
            </div>

            <div className=" md:w-1/4 p-4 border border-gray-300 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">
                Intuitive Visualizations
              </h2>
              <p className="text-gray-700">
                Say goodbye to data overload. Our creative and visually
                appealing charts, graphs, and tables make understanding
                commodity trends a breeze. We believe in transforming raw
                numbers into meaningful stories that anyone can comprehend.
              </p>
            </div>

            <div className="md:w-1/4 p-4 border border-gray-300 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">Tailored for You</h2>
              <p className="text-gray-700">
                Alpha Trade adapts to your preferences. Customize your
                dashboard, choose your favorite commodities, and set up
                personalized alerts. Our platform is designed to cater to your
                unique needs and trading style.
              </p>
            </div>

            <div className="md:w-1/4 p-4 border border-gray-300 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">In-Depth Analysis</h2>
              <p className="text-gray-700">
                Dive deep into the world of commodities with our comprehensive
                analysis. From historical price trends to future projections,
                Alpha Trade equips you with the knowledge needed to make
                informed decisions.
              </p>
            </div>

            <div className="md:w-1/4 p-4 border border-gray-300 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">News Feed Integration</h2>
              <p className="text-gray-700">
                Stay ahead of the curve with our integrated news feed. Access
                real-time updates on market trends, geopolitical events, and
                economic indicators directly impacting the commodities you
                follow.
              </p>
            </div>

            <div className="md:w-1/4 p-4 border border-gray-300 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">Custom Feature</h2>
              <p className="text-gray-700">
                Explore additional features tailored to your unique trading
                needs. Our platform evolves to meet the demands of the dynamic
                commodity market.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="md:w-2/3">
            <CrudeOilWti />
            <CrudeOilBrent />
            <NaturalGas />
            <Copper />
            <Aluminium />
          </div>
          <div className="md:w-1/3">
            <div className=" p-4">
              <WtiSidebar />

              <BrentSidebar />

              <NaturalGasSidebar />

              <CopperSidebar />

              <AluminiumSidebar />
           
              <Newsletter />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-extrabold text-2xl flex justify-center underline text-red-500">
            Latest Updates
          </h1>
          <p className="font-light text-center text-lg">
            At Alpha Trade we are committed in providing real time latest
            updates
          </p>
          <NewsList maxItems={6} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
