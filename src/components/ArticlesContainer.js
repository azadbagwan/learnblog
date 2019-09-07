import React from 'react'
import RoomsFilter from "./RoomsFilter.js"
import ArticleList2 from "./ArticleList2"
//import {RoomConsumer} from "../context"
import {withRoomConsumer} from "../context"
import Loading from "./Loading"

function ArticlesContainer({context}){

const {loading, sortedRooms, all_articles}=context
                            if(loading){
                               return <Loading/>;
                          }

                          return(
                               <>
                     {/* <RoomsFilter rooms={rooms}></RoomsFilter> */}
                     <ArticleList2 all_articles={all_articles}></ArticleList2>
                 </>

                             );
}


export default withRoomConsumer(ArticlesContainer)