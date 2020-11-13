import React from "react";
import { StyledFooter } from "../styles/StyledFooter";
const Footer = () =>{
    return (
    <>
    <div className = "container">
        <StyledFooter >
            <br/>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <h2 style={{color:"aqua"}}>React</h2>
                    <p>A JavaScript library for building user interfaces</p>
                    <a href="https://reactjs.org/" className="btn btn-outline-info">Know More</a>                    
                </div>
                <div className="col-md-6 col-sm-6">
                    <h2 >The  Movie DB</h2>
                    <p>The Movie DB is is a collaborative database about movies.</p>
                    <a href="https://www.themoviedb.org/" className="btn btn-outline-info">Know More</a>
                </div>
            </div>
        </StyledFooter>
    </div>
    </>
    );
}

export default Footer;