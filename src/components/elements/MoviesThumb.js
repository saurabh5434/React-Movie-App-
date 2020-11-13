import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({image, movieId, clickable}) => {
    return (
    <StyledMovieThumb>
    {clickable ? (
        <NavLink exact to= {`/${movieId}`}>
            <img className="clickable" src={image} alt="movie-poster"/>
        </NavLink> 
        ) : (<img src={image} alt="movie-poster"/>)}
   
    </StyledMovieThumb>);
}

MovieThumb.propTypes = {
    image:PropTypes.string,
    movieId : PropTypes.number,
    clickable : PropTypes.bool
}
export default MovieThumb;