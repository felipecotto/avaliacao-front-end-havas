import React from "react"
import * as S from "./styled";

const Button = (props) => (
    <S.Button onClick={props.action}>{props.label}</S.Button> 
)

export default Button