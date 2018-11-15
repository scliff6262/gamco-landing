import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'


const Toolbar = (props) => {

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand id="gamco-brand" bsStyle={{paddingTop: "7px"}}>
          <Link to="/"><img style={{height: "41px"}} src="http://www.1290funds.com/images/logo-gamco-2.jpg" /></Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="Media Center" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} >
          <Link to="/media/news">In the News</Link>
          </MenuItem>
          <MenuItem eventKey={3.2}>
            <Link to="/media/releases">Press Releases</Link>
          </MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="https://www.gabelli.com/Template/corporate/index.cfm">
          Investor Relations
        </NavItem>
        <NavItem eventKey={1} href="https://www.gabelli.com/corporate/about_us.cfm">
          About Us
        </NavItem>


      </Nav>
    </Navbar>
  )
}

export default Toolbar
