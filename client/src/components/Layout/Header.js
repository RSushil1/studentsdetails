import React, { useEffect, useRef, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {PiStudentDuotone} from 'react-icons/pi'
import { gsap } from 'gsap';

const Header = () => {
  const [first_name, setFirstName] = useState();
  const navigate = useNavigate();

  const searchName = (e)=>{
    e.preventDefault();
    navigate(`/search?name=${first_name}`);
  }

  const sf = useRef(null);

  useEffect(() => {
    // The element we want to animate
    const element = sf.current;

    // Animate the element with gsap.from
    gsap.from(element, {opacity:0, x:'50%', duration: 0.5, delay:0.3 });

    // Optionally, you can clean up the animation when the component unmounts
    return () => {
      gsap.killTweensOf(element);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
      <NavLink className="navbar-brand text-light" to="/"><PiStudentDuotone/>Info Web</NavLink>
      <form ref={sf} onSubmit={searchName} className="navbar-nav ms-auto mb-2 mb-lg-0">
        <input value={first_name} onChange={(e)=>setFirstName(e.target.value)} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Header
