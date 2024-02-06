import React from 'react'
import Header from '../components/header'
import NewsList from '../components/newslist'
import Footer from "../components/footer";


const News = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-8 flex justify-center mt-4 text-red-500 underline">
        News & Updates
      </h1>
      <p className='font-light text-lg px-2 bg-slate-200'>
        Delve into the pulse of global industries with our curated news section,
        spanning the realms of energy, transportation, retail, manufacturing,
        and wholesale. Stay informed about groundbreaking developments, market
        trends, and transformative innovations driving these sectors forward.
        From the latest advancements in energy technologies to pivotal shifts in
        transportation and the intricate dynamics of retail and manufacturing
        landscapes, our news coverage provides concise summaries that empower
        you to grasp the essential happenings across diverse industries. Whether
        you're a business professional, investor, or enthusiast, our
        comprehensive news updates offer valuable insights into the forces
        shaping the business world today.
      </p>
      <NewsList />
      <Footer/>
    </div>
  );
}

export default News