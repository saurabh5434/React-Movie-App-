import styled from 'styled-components';

export const StyledFooter = styled.div`
  margin-top: 10px;
  padding: 1rem;
  background-color: #5a5a5a;
  color:white;
  bottom: 0;
  left: 0;
  width: 100%;
  height:200px;
  text-align:center;
  .btn-outline-info{
    margin-bottom:5px;
    @media screen and (max-width:720px)
    {
     font-size:14px; 
    }
  }
  @media screen and (max-width: 720px)
  {
    font-size:14px;
    height:300px;
  }
`; 