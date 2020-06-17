import styled from "styled-components"

export const Button = styled.button`
    background-color: #0C0C0C;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    padding: 8px 32px;
    color: #fefefe;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Source Sans Pro',sans-serif;
    text-transform: uppercase;
    cursor: pointer; 
    -webkit-transition: all 0.2s ease-out;  
    transition: all 0.2s ease-out; 
    &:hover {
        box-shadow: 0 8px 16px rgba(12, 13, 20, 0.08);
        background-color: #3c3c3c; 
    }
`

