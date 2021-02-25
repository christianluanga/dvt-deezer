import React from "react"
import {Navbar} from "react-bootstrap"

const MenuBar = () => {
  return (
    <header>
      <Navbar id="nav" bg="light">
        <Navbar.Brand href="/">
          <h3>Deezer</h3>
        </Navbar.Brand>
      </Navbar>
    </header>
  )
}

export default MenuBar
