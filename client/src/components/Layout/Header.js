import React from 'react'
import {NavLink} from 'react-router-dom'
import {PiStudentDuotone} from 'react-icons/pi'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
      <NavLink className="navbar-brand text-light" to="/"><PiStudentDuotone/>Info Web</NavLink>
      <form className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Header
