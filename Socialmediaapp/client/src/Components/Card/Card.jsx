import React from 'react'
import './Card.scss'
function Card({prop}) {
  return (
    <>
    <div className='card'>
    <img src={prop.image} alt="" />
    <p>{prop.name}</p>
    <button>Add to card</button>
    </div>
    
    
    </>
  )
}

export default Card
