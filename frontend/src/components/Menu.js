import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import TodoList from './Todos.js'
import UserList from './User.js'

const NavbarItem = ({ name, href }) => <Link className='nav-link' to={href}>{name}</Link>


export default function Navbar({ navbarItems }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">Fixed navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          {navbarItems.map((item) => (
            <li className="nav-item active" style={{ display: 'flex' }}>
              <NavbarItem name={item.name} href={item.href} />
            </li>
          ))}
        </ul>

        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}