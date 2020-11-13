import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #5a5a5a;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 200px;
  margin-top: 18px;

  @media screen and (max-width: 500px) {
    width: 100px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 100px;
  margin-top: 18px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 60px;
    margin-top: 0px;
  }
`;

