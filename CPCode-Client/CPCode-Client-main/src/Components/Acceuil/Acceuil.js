import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/navbar";
import logo from "../Assets/logo.png";

import { Link } from "react-router-dom";

function Acceuil() {
  const Button = styled.button`
    justify-content:center;
    align-items:center;
    display:flex;
    height:70px;
    background-color:#BFDBF7;
    border:none;
    background-color:offwhite;
    font-size:30px;
    padding:20px 40px;
    text-transform:capitalize;
    cursor:pointer;
    transform:all 0.3s;
    position:relative;

    &:before{
      content:"";
      position :absolute;
      width:24px;
      height:24px;
      top:-5px;
        left:-5px;
      border-top:2px solid #022B3A;
      border-left:2px solid #022B3A;
      transition:all 0.25s;
    } 

    &:hover:before ,&:hover:after{
      width:104%;
      height:110%;
    } 

    &:after{
      content:"";
      position :absolute;
      width:24px;
      height:24px;
      bottom:-5px;
        right:-5px;
      border-bottom:2px solid #022B3A;
      border-right:2px solid #022B3A;
      transition:all 0.30s;
    }
  `;
  const GridContainer = styled.div`
    display : grid ;
    grid-template-rows: auto 1fr;
    height: 100vh;
    `;

  const AcceuilContainer = styled.div`
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;
  `;

  
    return (
        <GridContainer >
            <NavBar />
            <AcceuilContainer>
                <p style={{ textAlign: "center", fontFamily: "Lucida Console, Courier New, monospace", textIndent: "50px", lineHeight: "1.8" }}>
                    Is a set of reusable, ready-to-use components for building websites. It's designed to help<br></br> developers save time and improve efficiency by providing the building blocks for <br></br>building user interfaces.
                </p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
                  <Link to="/home" style={{ textDecoration : "none" , color : "black"}}>
                    <Button >Start</Button>
                  </Link>
                </div>
            </AcceuilContainer>
        </GridContainer>
    )
}
export default Acceuil;