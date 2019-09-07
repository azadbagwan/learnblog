import React from 'react'
import Article2 from './Article2'
export default function ArticleList2({all_articles}) {
    if(all_articles.length === 0){
        return(
            <div className="empty-search">
                <h3>No rooms matched</h3>

            </div>
        );
    }
    

    return (
            <section className="roomslist">
        <div className="roomslist-center">
        { all_articles.map(item=>{
            return <Article2 key={item.id} article={item}></Article2>
        })
    }
    
        </div>
    </section>
    );
}
