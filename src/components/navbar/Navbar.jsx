import './navbar.css'
import logo from '../../image/logos2.png'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  const [isScroll, setIsScroll] = useState(false)
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true)
    return () => {
      window.onscroll = null
    }
  }
  return (
    <div className={ isScroll ? 'navbar scroll' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src= {logo} alt="logo" />
          <Link to="/" className='link'>
            <span>Acceuil</span>
          </Link>
          <Link to="/films" className='link'>
            <span>Films</span>
          </Link>
          <Link to="/series" className='link'>
            <span>Series</span>
          </Link>
          <Link to="/" className='link'>
            <span>Populaire</span>
          </Link>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src="https://images.unsplash.com/photo-1575846171058-979e0c211b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profil" />
          <div className="profil">
            <ArrowDropDown className='icon' />
            <div className="options">
              <span>Setings</span>
              <span>Logout</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar