import styled from "styled-components"

export const Hero = styled.section`
  background-color: #FEFEFE;
  padding: 90px;
`
export const HehoTitle = styled.h1`
  font-size: 72px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 16px;
  color: #0C0C0C; 
`
export const HehoSubTitle = styled.h3`
  font-size: 24px; 
  font-weight: 400;
  font-family: 'Source Sans Pro', sans-serif;
  color: #0C0C0C; 
`

export const ShowPosts = styled.div`
  padding: 90px 0; 
  text-align: center; 
`

export const FlexGrid = styled.div`
  display: flex; 
  @media (max-width: 992px) {
    display: block; 
  }
`