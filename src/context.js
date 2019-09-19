import React, { Component } from 'react'

import items from "./data"
import { all } from 'q';
import axios from 'axios'

const RoomContext = React.createContext();

// <RoomContext.Provider value={'hello}



class RoomProvider extends Component {
    
    state={
        all_articles:[],
       rooms:[],
       sortedRooms:[],
       featuredRooms:[],
       loading:true,
       type:all,
       capacity:1,
       price:0,
       minPrice:0,
       maxPrice:0,
       minSize:0,
       maxSize:0,
       brekfast:false,
       pets:false,
       targetId:3,
    };
    // getdata
   

    componentDidMount(){
        let rooms= this.formatData(items);

        let featuredRooms= rooms.filter(room => room.featured === true);
        let maxPrice= Math.max(...rooms.map(item=> item.price));
        let maxSize= Math.max(...rooms.map(item=> item.size));
        

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize,
        });
        console.log("in the axios")
        axios.get("https://learnadvanceenglish.herokuapp.com/articlesjs")
        .then(response=>{
       
            console.log(response.data.json_list);
           /* console.log("targetID is" +this.state.targetId) */
            

            this.setState({all_articles:response.data.json_list})
            // console.log(this.state)
        })
        .catch(error=>{
            console.log(error)
        });
    }

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=> image.fields.file.url);

            let room={...item.fields,images,id};
            return room;

        });
        return tempItems;
    }
getId=(id)=>{
    let tempArticle= [...this.state.all_articles];
        const article= tempArticle.find(article=>article.id === id)
        return article;
}
    getRoom=(id2)=>{
        console.log("context id is-" +id2)
        var id1= parseInt(id2, 10)
        let tempRooms= [...this.state.all_articles];
        const article= tempRooms.find(article=>article.slug === id2)
        return article;
    };
    getRoom2=(id)=>{
        let tempRooms2= [...this.state.all_articles];
        const room2= tempRooms2.find(room=>room.id === id)
        return room2;
    };
   
handleChange = event => {
        
        const target =event.target
        const value = event.type === 'checkbox' ?target.checked:target.value
        const name =event.target.name;
        this.setState({
            //check the name in the state and set the corrosponding value on basis of whatever you selected.
            [name]:value
        },this.filterRooms)
    };  
updateTargetId= newTargetID => {
    this.setState({ targetId: newTargetID });
  };
    filterRooms=()=> {
        console.log("hello")
        let {
            rooms,type,capacity,price,minSize,maxSize,brekfast,pets
        } =this.state
        let tempRooms=[...rooms];
        if(type!== 'all'){
            tempRooms= tempRooms.filter(room=> room.type === type)
        }
        this.setState({
            sortedRooms:tempRooms
        })
    }
    // getArticle =(id)=>{
    //     const id2 = id
    //     console.log("id in getroom is "+id2)
    //     let tempArticles= [...this.state.all_articles];
    //     console.log(tempArticles)
    //     const article= tempArticles.find(all_article=>all_article.id === 2)
    //     return article;

    // };
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer= RoomContext.Consumer;


export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
    }
}
export{RoomProvider,RoomConsumer, RoomContext}