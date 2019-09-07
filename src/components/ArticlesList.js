import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import Article from "./Article"
import {RoomContext} from "../context"
import {useContext} from 'react'


export default class ArticlesList extends Component {

    state={
        all_articles: [],
        targetId:null,

    }
    componentDidMount() {
        console.log("in the axios")
        axios.get("https://learnadvanceenglish.herokuapp.com/articlesjs")
        .then(response=>{
       
            console.log(response.data.json_list);
           /* console.log("targetID is" +this.state.targetId) */
            

            this.setState({all_articles:response.data.json_list})
            console.log(this.state)
        })
        .catch(error=>{
            console.log(error)
        });
    };

    reply_click = id => {
        return () => {
           let {targetId: rooms } = this.context;
           const {updateTargetId} = this.context
         
            
             console.log(this.context.targetId)
            this.setState({ targetId: id });
            
            
            
        }
      }
      chnageTargetId=()=>{


      };
    render() {
        
      
     
        return (
            <div>
               <ol>
                   
                   {this.state.all_articles.map(article=>
                   <Link to={`articles/article:${article.id}`} onClick={this.reply_click(article.id)} className="article-link">
                    <li >
                    {/* {article.id}. {article.title}  */}
                    <br></br>
                    <Article id={article.id} title={article.title} body= {article.body}/>
                   
                    {/* <div dangerouslySetInnerHTML={{ __html: article.body }} /> */}
                    </li>
                    {/* <Article id={article.id} title={article.title} body= {article.body}/> */}
                    
                    </Link>
                    )}
                    
               </ol>
            </div>
        )
    }
}
