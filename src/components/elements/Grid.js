import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";
import { useLocation, NavLink} from "react-router-dom";

const Grid = ({header, go,children}) => {
    let location = useLocation();
    return (
    <StyledGrid>
        {location.pathname==='/' && header !== 'Search Result' && <NavLink to={`/movies/${go}`} style={{ float:"right"}}><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </NavLink>}
        <h1>{header}</h1>
        <br/>
        <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>);
}

Grid.propTypes = {
    header : PropTypes.string
}
export default Grid;