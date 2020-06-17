import styled from "styled-components";
import { Link } from "react-router-dom";
import Seta from "../../assets/img/la-arrow-right.svg"; 

export const PostCard = styled.div`
background-color: #fff;
border-radius: 8px;
padding: 40px;
box-shadow: 0 4px 8px rgba(12, 13, 20, 0.08);
-webkit-transition: all 0.2s ease-out;  
transition: all 0.2s ease-out; 
margin: 0 16px;
min-width: 300px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: baseline;
margin-bottom: 32px; 
&:hover {
    box-shadow: 0 16px 32px rgba(12, 13, 20, 0.08);
}
`

export const PostCardTitle = styled.h3`
color: blue;
font-size: 40px;
margin-bottom: 40px;
color: #0C0C0C; 
font-weight: 700;
font-family: 'Montserrat', sans-serif;
word-break: break-word;
`

export const PostCardBody = styled.p`
    color: #0C0C0C; 
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    font-weight: 400;
    font-family: 'Source Sans Pro', sans-serif;
`

export const PostCardLink = styled(Link)`
    color: #0C0C0C;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Source Sans Pro',sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    position: relative; 
    &:before {
        color: red; 
        position: absolute; 
        content: ''; 
        width: 12px;
        height: 10px;
        background-image: url(${Seta});
        right: -16px;
        background-repeat: no-repeat;
        top: 6px;
        -webkit-transition: all 0.2s ease-out;  
        transition: all 0.2s ease-out; 
    }
    &:hover {
        &:before {
            right: -24px;
        }
    }
`




