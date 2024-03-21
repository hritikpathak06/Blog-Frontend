import React from 'react'
import { BlogData } from '../../data'

const Card = () => {
  return (
    <div>
     {
        BlogData.map((item,index) => (
           <>
           <img src={item.img} alt="" style={{width:"100px"}}/>
           <h2>{item.heading}</h2>
           <p>{item.text}</p>
           </>
        ))
     }
    </div>
  )
}

export default Card
