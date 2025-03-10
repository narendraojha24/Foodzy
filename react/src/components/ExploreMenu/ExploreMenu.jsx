import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Satisfy your cravings with our carefully curated menu. Every dish is made to bring you the perfect balance of taste and quality.</p>
        <div className='box-icon'><i class='bx bxs-right-arrow-alt bx-fade-left' ></i></div>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        }

        )}
      </div>
      <hr />
    </div>
  )
}
