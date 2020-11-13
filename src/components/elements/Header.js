import React from "react";
import { NavLink } from "react-router-dom";
 
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import Navigation from "./Navigation";
import { StyledHeader ,StyledRMDBLogo, StyledTMDBLogo } from "../styles/StyledHeader";

const Header = () =>{
    return (
    <>
        <div className="container">
            <StyledHeader>
                <div className="header-content">
                    <NavLink to="/">
                        <StyledRMDBLogo src={RMDBLogo} alt="rmdb_logo"/>
                    </NavLink>
                    <StyledTMDBLogo src={TMDBLogo} alt="tmdb_logo"/>
                </div>
            </StyledHeader>
            <Navigation />
        </div>
    </>
    );
}

export default Header;