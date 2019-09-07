import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
export default function ChangeContext() {
    const context = useContext(RoomContext);
    const{
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,brekfast,pets
    } = context;

    return (
        <div>
            
        </div>
    )
}
