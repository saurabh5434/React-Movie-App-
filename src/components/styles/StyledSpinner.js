import styled from 'styled-components';

export const StyledSpinner = styled.div`
    border: 5px solid #1c1c1c;
    border-top: 5px solid red;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation :spin 0.8s linear infinite;
    margin : 20px auto;
    @keyframes spin{
        0% {
            transform: rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }

`;
