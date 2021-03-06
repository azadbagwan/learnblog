import React, { Component } from "react";
import defaultBcg from "../images/healthy-yoga.jpg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context"
import StyledHero from '../components/StyledHero'
import axios from 'axios'
export default class SingleArticle extends Component {
  constructor(props){
    super(props);
    //console.log(this.props)
    this.state={
      slug:this.props.match.params.slug,
      article1:[]
   
      
    }
  }
  static contextType= RoomContext
// componentDidMount(){
 
//   var id3= parseInt(this.state.id2, 10)
//   axios.post("https://learnadvanceenglish.herokuapp.com/articlejs", this.state)
//   .then(response=>{
//       console.log(response)
//       this.setState({article1:response.data.json_list})
//       console.log("article1 is- "+this.state.article1)
//   })
//   .catch(error=>{
//       console.log(error)
//   });
 
//  }



  render() {
    console.log("link "+this.props.match.params.slug)
    console.log("id is-"+this.state.slug)
    const {getRoom}= this.context;
    const article= getRoom(this.state.slug);
    //const article= this.state.article1;
    console.log(article);
    if (!article){
      return (
      <div className="error">
        <h3> Loading....</h3>
        <Link to="/articles" className="btn-primary">
          Back to Articles.
        </Link>
      </div>
      ) 
      
    }
    
    const {slug,title,body, image}= article;
    const images= []
    const [mainImg,...defaultImg]= image;
    const imgtest="healthy-yoga.jpg"
    const img1=require(`../images/${image}`)
    console.log(image)
    // console.log(img1)
    
    return (
    <>
    <StyledHero img={defaultBcg}>
      <Banner title={`${title} `}>
        <Link to="/articles" className="btn-primary">
          Back to articles.
        </Link>
      </Banner>
    </StyledHero>
    <section className="sigle-room">
     
      <div className="single-room-info">
        <article className="desc">
        
          <h3> Title-{slug} {title}</h3>

          <p><div dangerouslySetInnerHTML={{ __html: body }} /> </p>
          <div className="single-room-images">
        
        <img  src={img1} alt="product" />
        {/* {defaultImg.map((item, index)=>{
        return <img key={index} src={item} alt={title}/>;})} */}
      </div>
        </article>
        {/* <article className="info">
          <h3>Info</h3>
          <h6>Price: ${price}</h6>
          <h6>Size: {size}SQFT</h6>
          <h6>Max capacity: {capacity >1? `${capacity} people`:`${capacity} person` }</h6>
          <h6>{pets?"Pets aloowed": "Pets not allowed"} </h6>
          <h6>{breakfast && "Free breackfast included"}</h6>
        </article> */}
      </div>
    </section>
    {/* <section className="room-extras">
      <h6>Extras:</h6>
      <ul className="extras">
       { extras.map((item,index)=>{
         return <li key={index}>{item}</li>
       })}
      </ul>
    </section> */}
    </>
    );
  }
}
