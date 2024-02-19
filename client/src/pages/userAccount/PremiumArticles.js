import React from 'react';
import Navbar from '../../components/Dashboard/navbar'
import Sidebar from '../../components/Dashboard/sidebar'
import NewsList from '../../components/newslist';
import Footer from '../../components/footer';

const PremiumArticles = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
     <Sidebar />
      <div className='md:flex md:flex-col md:w-4/5 p-2"'>
       <div className='mt-4'>
       <h1 className='font-bold text-xl'>Premium Articles</h1>
        <p className='bg-slate-200 p-2'>
          Discover a world of in-depth insights and strategic perspectives with
          Alpha Trade's premium articles. Our premium content goes beyond the
          surface, offering exclusive analyses, expert opinions, and deep dives
          into the intricate dynamics of commodities, financial markets, and
          global industries. Tailored for those seeking a comprehensive
          understanding, these articles provide unique perspectives, market
          forecasts, and actionable strategies. From detailed commodity market
          reports to exclusive interviews with industry leaders, our premium
          articles offer a premium experience, empowering you with the knowledge
          needed to navigate and thrive in the complex landscape of global trade
          and finance. Elevate your decision-making with Alpha Trade's premium
          content – where expertise meets innovation.
        </p>
       </div>
        <NewsList/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PremiumArticles