import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

export default function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)
  return (
    <div>
        <div className="food-display" id='food-display'>
            <h2>Top dishes near you</h2>
            <div></div>
        </div>
      
    </div>
  )
}
