import React, { Component } from 'react'
import Hero from "./Hero"
class Article extends Component{
    render() {
        return (
            
            <div style={{paddingTop:110}}>
         
            {this.props.id} {this.props.title}
            <div dangerouslySetInnerHTML={{ __html: this.body }} />
            {console.log(this.props.id)}
                
            </div>
        )
    }
}
export default Article