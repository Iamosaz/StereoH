import React from 'react'
import './Title.css'

const Title = ({subTitle, title, titleh2}) => {
  return (
    <div className='title'>
       <p>{subTitle}</p>
       <h2>{title}</h2>
       <h6>{titleh2}</h6>
    </div>
  )
}

export default Title
