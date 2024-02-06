import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
  return (
   <div>
     <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Alpha Trade
          </h1>
          <div className="prose lg:prose-lg mx-auto  text-lg font-light bg-slate-200 p-4 rounded-lg">
            <p>
              Welcome to Alpha Trade, where we are revolutionizing the way
              traders and investors access and interpret commodity market data.
              Our platform is designed to empower individuals and organizations
              with the tools and insights needed to navigate the dynamic and
              often unpredictable world of commodities trading.
            </p>
            <p className="mt-6">
              At Alpha Trade, we understand that success in the commodities
              market requires more than just luck; it requires access to
              accurate, timely, and actionable information. That's why we've
              built a platform that provides real-time market data, historical
              trends, and advanced analytics, all in one place. With Alpha
              Trade, you'll have the information you need to make informed
              decisions and stay ahead of the curve.
            </p>
            <p className="mt-6">
              Our commitment to our users goes beyond just providing data. We
              believe in transparency, reliability, and user empowerment. That's
              why we source our data from reputable sources and subject it to
              rigorous validation processes to ensure accuracy. We also
              prioritize user privacy and security, implementing
              industry-leading measures to safeguard your personal information.
            </p>
            <p>
              Whether you're a seasoned trader or just starting out, Alpha Trade
              has something for you. Our platform offers customizable
              dashboards, interactive charts, and powerful analysis tools, all
              designed to help you maximize your trading potential. Join us on
              our mission to democratize access to commodity market data and
              empower traders and investors worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default About;
