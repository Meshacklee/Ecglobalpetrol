import React from 'react'
import "./Heroimg.css"

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
      <img src="./Images/istockphoto-1136053255-612x612.jpg" alt= "Ecglobalpetrol" width="100%"/>
      </div>
      <div className='content'>
        <p>Hi am a developer</p>
        <h1>Full stack Developer</h1>
       
        <div className='fold'>
        <div className='btn'>
          <a href='/project'>Project  </a>
        </div>

        <div className='btn-light'>
          <a  href='/Contacts'> Contact US </a>
          </div>
          </div>
      </div>

        </div>
  )
}

export default Heroimg