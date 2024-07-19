// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

    const SignButton = () => {
      return (
        <button className="bg-yellow-400  text-black font-bold hover:bg-yellow-500  py-2 px-4 rounded-lg shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-40 relative overflow-hidden group">
        <span className="relative z-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 transition-transform duration-500 ease-in-out group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Sign In
        </span>

      </button>
      );
    };



const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo"/></Link>
      <ul className="navbar-menu">
      <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>

        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <SignButton onClick={() => setShowLogin(true)}></SignButton>
      </div>
    </div>
  )
}

export default Navbar
