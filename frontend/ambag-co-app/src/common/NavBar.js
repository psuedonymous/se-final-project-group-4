import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { MenuItems } from './MenuItems'
import './NavBar.css'

export function NavBar() {
    return (
      <Navbar bg="blue" variant="light" sticky="top" expand="sm" collapseOnSelect>
        <div className="container-fluid">
          <Navbar.Brand>
            <Link to="/">
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
            <Nav>
                <Link to="/cart" className="nav-link">
                  <span> <i className='fas fa-shopping-bag fa-lg'></i> </span>
                </Link>
            </Nav>
            <Nav>
              <NavDropdown title={
                <span>
                  <i className='fas fa-user-circle fa-lg' ></i>
                </span>} renderMenuOnMount={true} align="end">
                <NavDropdown.Item>
                  <Link to='/my-profile' className="nav-link nav-drop-link">My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/my-donation' className="nav-link nav-drop-link">My Donation</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to='/logout' className="nav-link nav-drop-link">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }