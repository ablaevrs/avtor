import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <>
        <header className="navigation fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-white">
            <a className="navbar-brand order-1" href="index.html">
                <img className="img-fluid" width="100px" src="images/logo.png"
                alt="Reader | Hugo Personal Blog Template" />
            </a>
            <div className="collapse navbar-collapse text-center order-lg-2 order-3" id="navigation">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    homepage <i className="ti-angle-down ml-1"></i>
                    </a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="index-full.html">Homepage Full Width</a>
                    <a className="dropdown-item" href="index-full-left.html">Homepage Full With Left Sidebar</a>
                    <a className="dropdown-item" href="index-full-right.html">Homepage Full With Right Sidebar</a>
                    <a className="dropdown-item" href="index-list.html">Homepage List Style</a>
                    <a className="dropdown-item" href="index-list-right.html">Homepage List With Right Sidebar</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    About <i className="ti-angle-down ml-1"></i>
                    </a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="about-me.html">About Me</a>
                    <a className="dropdown-item" href="about-us.html">About Us</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Pages <i className="ti-angle-down ml-1"></i>
                    </a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="author.html">Author</a>
                    <a className="dropdown-item" href="author-single.html">Author Single</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="shop.html">Shop</a>
                </li>
                </ul>
            </div>
        
            <div className="order-2 order-lg-3 d-flex align-items-center">
                <select className="m-2 border-0 bg-transparent" id="select-language">
                <option id="en" value="" selected>En</option>
                <option id="fr" value="">Fr</option>
                </select>
                
                <form className="search-bar">
                <input id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
                </form>
                
                <button className="navbar-toggler border-0 order-1" type="button" data-toggle="collapse" data-target="#navigation">
                <i className="ti-menu"></i>
                </button>
            </div>
        
            </nav>
        </div>
        </header>

        <Outlet />
    </>
  )
}
