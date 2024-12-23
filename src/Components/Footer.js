import React from 'react'
import "./Footer.css"

const footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-addres'>
          <h3><span className='Badge'>Address :</span> 13 Umuode Aba Portharcourt Road</h3>
          <h4>+234 7067 180 495</h4>
          <h4>Deleecrest@gmail.com</h4>
        </div>


        <div className='Footer-abt'>
          <h1>About the Company</h1>
          <p><span className='Badge'>Deleecrest</span> is a Digital Service Provider 
          <br></br>We Design, print and offer Web Developmeent Services </p>

        </div>
       
      

    </div>
  )
}

export default footer