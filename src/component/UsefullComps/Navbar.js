import React from 'react'
import './Navbar.css';
import styled,{css}  from 'styled-components';

const Navbar = () => {
    const Logo = styled.h2`
    color: #0047AB;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    padding: 20px;

 `;
    return (
        <div>
        <div className="wrapper">
          <nav>
            <input type="checkbox" id="show-search" />
            <input type="checkbox" id="show-menu" />
            <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
            <div className="content">
              <div className="logo"><a href="#">logo</a></div>
              <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li>
                  <a href="#" className="desktop-link">Features</a>
                  <input type="checkbox" id="show-features" />
                  <label htmlFor="show-features">Features</label>
                  <ul>
                    <li><a href="#">Drop Menu 1</a></li>
                    <li><a href="#">Drop Menu 2</a></li>
                    <li><a href="#">Drop Menu 3</a></li>
                    <li><a href="#">Drop Menu 4</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="desktop-link">Services</a>
                  <input type="checkbox" id="show-services" />
                  <label htmlFor="show-services">Services</label>
                  <ul>
                    <li><a href="#">Drop Menu 1</a></li>
                    <li><a href="#">Drop Menu 2</a></li>
                    <li><a href="#">Drop Menu 3</a></li>
                    <li>
                      <a href="#" className="desktop-link">More Items</a>
                      <input type="checkbox" id="show-items" />
                      <label htmlFor="show-items">More Items</label>
                      <ul>
                        <li><a href="#">Sub Menu 1</a></li>
                        <li><a href="#">Sub Menu 2</a></li>
                        <li><a href="#">Sub Menu 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>
            <label htmlFor="show-search" className="search-icon"><i className="fas fa-search" /></label>
            <form action="#" className="search-box">
              <input type="text" placeholder="Type Something to Search..." required />
              <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right" /></button>
            </form>
          </nav>
        </div>
      </div>
    )
}

export default Navbar
