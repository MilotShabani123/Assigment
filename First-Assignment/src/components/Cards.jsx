import './Cards.css'
import React from 'react'

const Cards = ({ title, img, content }) => {
  return (
      <div className='card'>
        <div className='img'>
          <i>{img}</i>
        </div>
        <div className='elements'>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
  )
}

export default Cards