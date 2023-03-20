import React from 'react'
import Blog from '../component/Blog/Blog'
import Footer from '../component/Footer/Footer'
import Header from '../component/Header/Header'
import Hero from '../component/Hero/Hero'
import HowItWorks from '../component/HowItWorks/HowItWorks'
import LiveAuction from '../component/LiveAuction/LiveAuction'
import NewItems from '../component/NewItems/NewItems'
import TopArtist from '../component/TopArtist/TopArtist'
import TopSellers from '../component/TopSellers/TopSellers'

function Home() {
  return (
      <div>
          <Header />
          <Hero />
          <LiveAuction />
          <NewItems />
          <TopArtist />
          <TopSellers />
          <HowItWorks />
          <Blog />
          <Footer/>
    </div>
  )
}

export default Home