import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  top:0;
  width: 100%;
  height: 80px;
  background: #1c1c1c;
  padding: 10px;
  box-sizing: border-box;
  color: #fff;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 45px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px; 
  position: relative;
  color: #fff;

  .fa-search {
    position: absolute;
    margin-left:10px;
    margin-top:5px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height:60%;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 17px;
    }
  }
`;
