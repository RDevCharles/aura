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
          Aura
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/games">About</Nav.Link>
          </Nav>
          <Nav style={{ marginRight: "2rem" }}>
            {props.username ? (
              <>
                {" "}
                <Nav.Link>Hi {props.username}</Nav.Link>
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
              </>
            ) : (
              <Nav.Link>Signup</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
