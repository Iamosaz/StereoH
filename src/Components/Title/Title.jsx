import React from 'react'
import './Title.css'

const Title = ({subTitle, title, titleh2, contactRef ,id}) => {
  return (
    <div className='title' ref={contactRef} id={id} >
       <p>{subTitle}</p>
       <h2>{title}</h2>
       <h6>{titleh2}</h6>
    </div>
  )
}

export default Title
