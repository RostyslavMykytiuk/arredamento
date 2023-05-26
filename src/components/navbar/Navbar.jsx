import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch } from 'react-icons/ai'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import './Navbar.css'


export const Navbar = () => {
  return (
    <nav className='menu'>
        <h3>Arredamento</h3>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="catalog">Catalog</Link>
            <Link to="about_us">About us</Link>
            <Link to="contact">Contact</Link>
        </div>
        <div className="icons">
            <AiOutlineSearch/>
            <HiOutlineShoppingBag/>
        </div>
    </nav>
  )
}
