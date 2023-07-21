import { React, useState } from 'react';
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';

const NavBar = ({categories}) => {

    return (
        <Navbar expand="lg" dark bg="dark">
        <Navbar.Brand href="/">Tienda de mentirita</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink href="/productos" active>Productos</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Categorias</Nav.Link>
              <Dropdown.Menu>
                { categories && categories.map((categoria, index) =>{
                    const url = "/categoria/" + index;
                    return(<Dropdown.Item key={index} href={url}>{categoria}</Dropdown.Item>)
                }  
                )}                
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav>
          
        </Collapse>
        <Navbar.Text>Aceptamos cualquier cosa menos pesos argentinos</Navbar.Text>
      </Navbar>
    )
}

export default NavBar