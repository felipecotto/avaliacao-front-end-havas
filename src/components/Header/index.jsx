import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as S from "./styled"

const Header = () => (
    <S.Header>
         <div className="container">
            <S.HeaderNav>
                <S.HeaderLi>
                    <S.HeaderLink href="/">Home</S.HeaderLink>
                    <S.HeaderLink href="/posts">Posts</S.HeaderLink>
                </S.HeaderLi>
            </S.HeaderNav>
         </div>
    </S.Header>
)

export default Header