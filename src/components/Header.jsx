import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>

        <LinkContainer to='/'>
          <Navbar.Brand>A&B</Navbar.Brand>
        </LinkContainer>
        
        <Nav className="me-auto">
          <LinkContainer to='/'>
            <Nav.Link>Главная</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/favorites'>
            <Nav.Link>Избранное</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
            <Nav.Link>Корзина</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/description'>
            <Nav.Link>Описание</Nav.Link>
          </LinkContainer>
        </Nav>

      </Container>
    </Navbar>
  )
}
