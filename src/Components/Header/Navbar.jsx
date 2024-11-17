import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Css/Navbar.css'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import { user } from '@heroicons/react/24/solid'




export default function Navbar() {
  return (
    <div className='container-navbarj'>
        {/* <nav className='navbar'>
          <Link to='/'>
            <img className='logo' src='Images\achieversIT.png' alt="" />
            </Link>
        <ul>
          <li >
          <Link to='/'>Home</Link>
        </li>
        <li >
          <Link to='/Mobile'>Shop</Link>
        </li>
        <li >
        <Link to='/Tv'>Cart</Link>
        </li>
        <li>
        <Link to='/Laptop'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
</Link>
        </li>
        <li >
        <Link to='/Tablets'>Tablets</Link>
        </li>
        <li >
        <Link to='/Printer'>Printer</Link>
        </li>
      </ul>

</nav> */}




{/* ----------------------------------------------------------------------------------------------------------------------------- */}

<nav className="navbar navbar-expand-lg fixed-top ">
      
      <div className="container-fluid ">
      <Link to='/'>
      <img className='logo' src='Images\achieversIT.png' alt="" />
            </Link>

        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Mobile">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Tv">Cart</Link>
            </li>
            <li className='user-icon'><Link >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49996 6C7.49996 3.51472 9.51468 1.5 12 1.5C14.4852 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4852 10.5 12 10.5C9.51468 10.5 7.49996 8.48528 7.49996 6Z" fill="#0F172A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75121 20.1053C3.82855 15.6156 7.49195 12 12 12C16.5081 12 20.1716 15.6157 20.2487 20.1056C20.2538 20.4034 20.0823 20.676 19.8116 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21382 22.5 6.5674 21.8917 4.18829 20.7999C3.91762 20.6757 3.74608 20.4031 3.75121 20.1053Z" fill="#0F172A"/>
            </svg>
            </Link></li>
            <li> 
              <Link><ShoppingCartRoundedIcon className='cart-icon'></ShoppingCartRoundedIcon></Link>
            </li>
            
            
          </ul>
        </div>
      </div>






      
    </nav>


    




    </div>
  )
}
