import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className="secondary-nav">
            <div className="container ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                  <a className="navbar-brand" href="#">ECGLOBALPETROL</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">HOME</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Catalog">ABOUT-US</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCTS
                        </a>
                        <ul className="dropdown-menu text-bold">
                          <li><a className="dropdown-item" href="#">PETROL-STATION</a></li>
                          <li><a className="dropdown-item" href="#">REAL-ESTATE</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">OTHERS</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Collection">PROFILE</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Blog">BLOG</a>
                      </li>
                    </ul>
      
                  </div>
                </div>
              </nav>


        </div>  
        </div>
  )
}

export default Nav