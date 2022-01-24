import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { MenuItems } from '../assets/MenuItems';
import SearchBar from './SearchBar';
import './NavBar.css';
import { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { displayProfile } from '../apis/Get-apis';

export function NavBar({toDisplay, results}) {
  const [profilePic, setProfilePic] = useState([]);

  useEffect(() => {
    displayProfile(setProfilePic)
  })

  const displaySearch = (toDisplay) => {
    if(toDisplay){
      return  <SearchBar placeholder="Search"
      results={results} />
    }
  }

  return (
    <Navbar bg="blue" variant="light" sticky="top" expand="sm" collapseOnSelect>
      <div className="container-fluid">
        <Navbar.Brand className="d-none d-sm d-">
          <Link to="/home">
            <img src="\uniqorn.png" alt="app-logo" width="30" height="35" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {MenuItems.map((item, index) => {
              return (
                <Link key={index}
                  to={item.url} className={item.cName}>{item.title}
                </Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
        {displaySearch(toDisplay)}
        {/* <SearchBar placeholder="Search"/> */}
        <Nav className="ms-auto">
          <Link to="/inbox" className="nav-link">
            <span> <i className='far fa-envelope fa-lg'></i> </span>
          </Link>
        </Nav>
        <Nav>
          <Link to="/shop-bag" className="nav-link">
            <span> <i className='fas fa-shopping-bag fa-lg'></i> </span>
          </Link>
        </Nav>
        <Nav>
          <NavDropdown title={
            <span>
              <Avatar className='avatar' name="ME" src={`${profilePic.map(pic=>{return pic.acc_image})}`}/>
            </span>} renderMenuOnMount={true} align="end">
            <NavDropdown.Item>
              <Link to='/my-profile' className="nav-link nav-drop-link">My Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to='/my-shop' className="nav-link nav-drop-link">My Shop</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to='/' className="nav-link nav-drop-link">Logout</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  )
}