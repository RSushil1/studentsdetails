import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='container-fluid bg-dark m-0 p-5 text-center'>
      <h4 className=' text-light'>All Right Reserved &copy; InfoWebIndia</h4>
      <p className='footer text-light ms-5 '>
        <Link to="/about">About</Link>
        |
        <Link to="/contacts">Contact</Link>
        |
        <Link to="/policy">Privacy Policy</Link>
      </p>
      </div>
    </footer>
  )
}

export default Footer
