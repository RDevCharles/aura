import React, { useRef, useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logout } from "../../utils/users-service";

function CollapsibleExample(props) {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
        <Navbar.Brand style={{ marginLeft: "2rem" }} href="/">
          Aura Dashboard
        </Navbar.Brand>
      

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
           
              <Nav.Link href="/insights">Insights</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/admin/issues">Issues</Nav.Link>
          
       
        </Nav>
        <Nav style={{ marginRight: "2rem" }}>
          
          <NavDropdown
            style={{ marginRight: "2rem" }}
            title="Settings"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/profile-settings">
              Profile Info
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={function () {
                logout();
                window.location.reload();
              }}
              href="#action/3.4"
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      </>
  );
}

export default CollapsibleExample;
