import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid ">

        <Link className="navbar-brand  text-info" to="/">Kitab Qurdu</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar w-25">

            <li className="nav-item">
              <NavLink className={'nav-link'} to="/">
                HomePage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : 'nav-link'}
                to="/ürünler">ürünler
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className={'nav-link'} 
                to="/kategoriler">Kategoriler
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Header


