import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export default function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p>nkdkcnirhnfi4rhj j dcjbirhfiy94rjbi hirfhyv9u4rn jbihciu49fu490fbv jccbihrif94rf cjbifvh4irfu94uf jcbeifh9i4uf94d  jbihfiuf9</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div className="explore-menu-list-item">
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        }

        )}
      </div>
    </div>
  )
}
