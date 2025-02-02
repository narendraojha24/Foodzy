import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

export default function Home() {
  const[category,setCategory]=useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      
    </div>
  )
}
