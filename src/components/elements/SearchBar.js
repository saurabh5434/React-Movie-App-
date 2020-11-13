import React, { useRef, useState } from "react";
import FontAwesome from 'react-fontawesome';
import { StyledSearchBar, StyledSearchBarContent } from "../styles/StyledSearchBar";
import PropTypes from "prop-types";
const SearchBar = ({callback }) => {
    const [state, setState ] = useState('');
    const timeout = useRef(null);
    const doSearch = event =>{
        const { value } = event.target;
        clearTimeout(timeout.current);
        setState(value);
        timeout.current = setTimeout(()=>{
            callback(value);
        }, 500);
    }
    return (
    <StyledSearchBar>
        <StyledSearchBarContent>
            <FontAwesome className="fa-search" name="search" size="2x" />
                <input type="text" placeholder="Type here to search" onChange={doSearch} value={state} />
        </StyledSearchBarContent>
    </StyledSearchBar>);
}
SearchBar.propTypes = {
    callback : PropTypes.func,
}
export default SearchBar;