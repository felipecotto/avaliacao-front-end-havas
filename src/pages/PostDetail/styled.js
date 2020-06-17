import styled from "styled-components" 
import { Link } from "react-router-dom";

export const PostDetail = styled.div`
  padding: 90px 0;
  padding-right: 40px;
`
export const PostDetailTitle = styled.h2`
font-size: 40px;
margin-bottom: 40px;
color: #0C0C0C; 
font-weight: 700;
font-family: 'Montserrat', sans-serif;
`
export const PostDetailBody = styled.p`
  font-size: 16px; 
  font-family: 'Source Sans Pro',sans-serif;
  line-height: 1.6;
  margin-bottom: 48px;
`
export const ShareSocialMedia = styled.h3`
    font-size: 24px; 
    font-weight: 600;
    margin-bottom: 24px;
    font-family: 'Source Sans Pro',sans-serif;
`
export const RelatedPosts = styled.div`
    padding: 90px 16px;
`
export const RelatedPostsTitle = styled.h3`
    font-size: 24px; 
    font-weight: 600;
    font-family: 'Source Sans Pro',sans-serif;
    margin-bottom: 32px;
`
export const RelatedPostsLinks = styled.a`
    display: block;
    color: #0C0C0C;
    text-decoration: none; 
    padding 16px 0;
    font-size: 20px; 
    font-weight: 600;
    font-family: 'Source Sans Pro',sans-serif;
    border-bottom: solid 2px transparent;
    -webkit-transition: all 0.2s ease-out;  
    transition: all 0.2s ease-out; 
    &:hover {
        border-bottom: solid 2px #0C0C0C;
    }
`
export const FlexGrid = styled.div`
  display: flex; 
  @media (max-width: 992px) {
    display: block; 
  }
`