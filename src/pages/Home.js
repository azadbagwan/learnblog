import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Articlelist from "../components/ArticlesList"

import {Link} from "react-router-dom";
import ServicesHome from "../components/ServicesHome"
import FeaturedRooms from "../components/FeaturedRooms"
import Loginform from "./Loginform"
import ArticleContainer from "../components/ArticlesContainer"
export default function Home() {
  return (
  <>
        <div className="main-content">

  <Hero hero="defaultHero" >
    <Banner title="Know us" subtitle="About the authors">
      <Link to="/about_us" className=" btn-primary">
        Our services
        </Link>
      </Banner>
  </Hero>
 <ArticleContainer></ArticleContainer>
  {/* <ServicesHome></ServicesHome> */}

  {/* <FeaturedRooms></FeaturedRooms> */}
  {/* <Loginform/> */}
</div>
  </>);
}
