import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({ login, exit }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <span className="navbar-brand">Fixed navbar</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">

            <li><Link to="/users">Users</Link></li>
            <li><Link to="/projects">Project</Link></li>
            <li><Link to="/projects/create">Project create</Link></li>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/todos/create">Todos create</Link></li>
            <li>
                { login ? <button onClick={exit}>Logout</button> : <Link to="/login">Login</Link> }
            </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}