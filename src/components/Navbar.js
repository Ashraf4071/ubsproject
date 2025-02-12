// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </Nav>
  );
};

export default Navbar;
