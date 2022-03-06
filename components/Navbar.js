import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="/Aboutt">Aboutt</a>
        <a class="nav-link disabled">Disabled</a>
        {/* <Link to="/Aboutt">Aboutt</Link> */}
      </div>
    </div>
  </div>
</nav> 

{/* <Link className='nav-link active' to="/Aboutt">Aboutt</Link> */}
{/* <Link className='nav-link active' to="/Aboutt">home</Link>*/}
{/* <Link className='nav-link active' to="/Aboutt">contact</Link>
<Link className='nav-link active' to="/Word">word</Link> */}

    </div>
  )
}

export default Navbar