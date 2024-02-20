import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="headerNav">
        <div className="headerNavdivs">
          <h1>Lear<span style={{color:'red'}}>ning</span></h1>
        </div>
        <div className="headerNavdivs">
          <div className="navbar">
            <a href="#home">Home</a>
            <a href="#news">Comapny</a>
            <div className="dropdown">
              <button className="dropbtn">
                Courses
              </button>
              <div className="dropdown-content">
                <a href="#">Villas</a>
                <a href="#">Tenaments</a>
                <a href="#">Flats</a>
              </div>
            </div>
            <a href="#home">Blogs</a>
            <a href="#home">Contact Us</a>
          </div>
        </div>
        <div className="headerBtndiv">
            <Link to={'/api/child/login'}><button className="log">Login
              </button></Link>
              <Link to={'/api/child/signup'}><button className="sign">Register</button></Link>
        </div>
      </div>
      <div className="middle">
        <text className="midleMainTxt">Ready to find your perfect course?</text>
        <text className="middleParaTxt">Discover wide range of courses from our house</text>
        <div className="search">
          <select className="select">
            <option value="for sale">Subscribe</option>
            <option value="for rent">Free</option>
          </select>
          <input className="searchBar" placeholder="Search for any course"/>
          <button className="searchBtn">
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
