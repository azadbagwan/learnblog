import React from 'react'
import Articlelist from "../components/ArticlesList"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
export default function articles() {

   
     
    return (
        <Hero hero="defaultHero" >
    <Banner title="Know us" subtitle="About the authors">
      <Link to="/about_us" className=" btn-primary">
        Our services
        </Link>
      </Banner>
  </Hero>
        <div style={{paddingTop:110}}>
            hello from article
            <Articlelist/>
        </div>
    )
}
