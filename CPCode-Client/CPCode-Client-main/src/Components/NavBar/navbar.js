import React from 'react';
import logo from "../Assets/logo.png";

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function NavBar() {

  const NavContainer = styled.nav`
    padding-top: 5px ;
    padding-right : 10px ;
    padding-left : 10px ;
    display : flex ;
    align-items : center ;
    justify-content : space-between ;
    padding : 1.1875 rem ;
    max-height : 1.875 rem;
  `;

  const LinkContainer = styled.div`
    display : flex ;
    justify-content : space-around ;
    @media (max-width: 37.5 rem) {
      margin-left: 0;
      margin-top: 0.625rem;
      justify-content: center;
    }
  `;

  return (
    <NavContainer>
      <img src={logo} alt="logo" style={{ width: "9.375rem" }} />
      <LinkContainer>
        <Link to="/signup" style={{
          padding: "0.625rem 1.5625rem",
          margin: "0 0.625rem",
          cursor: "pointer",
          backgroundColor: "#022B3A",
          borderColor: "#FFFFFF",
          color: "#FFFFFF",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "0.9375rem",
          borderStyle: "solid",
          fontWeight: "bold",
          borderRadius: "3.125rem",
          color: "white",
          textDecoration: 'none'
        }}>Sign up</Link>
        <Link to="/login" style={{
          padding: "0.625rem 1.5625rem",
          cursor: "pointer",
          backgroundColor: "#1F7A8C",
          borderColor: "#FFFFFF",
          color: "black",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "0.9375rem",
          borderStyle: "solid",
          fontWeight: "bold",
          borderRadius: "3.125rem",
          textDecoration: 'none'
        }}>Login</Link>
      </LinkContainer>
    </NavContainer>

  );
}
