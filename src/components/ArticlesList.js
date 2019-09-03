import React, { Component } from 'react'
import axios from 'axios'
export default class ArticlesList extends Component {
    state={
        all_articles: []

    }
    componentDidMount() {
        console.log("in the axios")
        axios.get("https://learnadvanceenglish.herokuapp.com/articlesjs")
        .then(response=>{
       
            console.log(response.data.json_list);
            

            this.setState({all_articles:response.data.json_list})
            console.log(this.state)
        })
        .catch(error=>{
            console.log(error)
        });
    };
    render() {
        return (
            <div>
               <ol>
                   {this.state.all_articles.map(article=>
                    <li >{article.id}. {article.title} <br></br>
                   
                    <div dangerouslySetInnerHTML={{ __html: article.body }} /></li>
                    )}
               </ol>
            </div>
        )
    }
}
