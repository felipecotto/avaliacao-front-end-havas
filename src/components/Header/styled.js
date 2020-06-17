import styled from "styled-components"
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #FEFEFE;
  height: 80px;
  box-shadow: 0 4px 8px rgba(12, 13, 20, 0.08);
  position: relative; 
  z-index: 1;
`
export const HeaderNav = styled.ul`
  float: right;
`
export const HeaderLi = styled.li`
`
export const HeaderLink = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  padding: 24px 16px;
  text-decoration: none;
  color: #0C0C0C;
  letter-spacing: 1.1px;
`