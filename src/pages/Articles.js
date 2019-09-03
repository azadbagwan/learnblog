import React from 'react'
import Articlelist from "../components/ArticlesList"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
export default function articles() {

   
     
    return (
        <div style={{paddingTop:110}}>
        <Hero hero="defaultHero" >
    <Banner title="Know us" subtitle="About the authors">
      <Link to="/about_us" className=" btn-primary">
        Our services
        </Link>
      </Banner>
  </Hero>
        
            <h1>Articles</h1>
            <Articlelist/>
        </div>
    )
}
