import React from 'react'
import {Link} from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"
import defaultBcg from "../images/healthy-yoga2.jpg";
import PropTypes from "prop-types"
export default function Article2({article}) {
    const{id,slug,title,body, image}= article;
    const img1=require(`../images/${image}`)
    //console.log(room)
    return (<article className="room">
        <div className="img-container">
             { <img src={img1}/>}
            {/* <img src={images[0] || defaultImg} alt=" single room"/> */}
            <div className="price-top">
                <h6>{title}</h6>
            </div>
            <Link to={`/articles/${slug}`} className="btn-primary room-link">
                  Feature
            </Link>
        </div>
        <p className="room-info">{title}</p>
    </article>
    );
}
Article2.propTypes ={
    article:PropTypes.shape({
        slug:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        body:PropTypes.arrayOf(PropTypes.string).isRequired
        
    })

}