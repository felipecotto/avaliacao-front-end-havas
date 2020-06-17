import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as S from "./styled"

const Header = () => (
    <S.Header>
         <div className="container">
            <Router>
                <S.HeaderNav>
                    <S.HeaderLi>
                        <S.HeaderLink to="/">Home</S.HeaderLink>
                        <S.HeaderLink to="/posts">Posts</S.HeaderLink>
                    </S.HeaderLi>
                </S.HeaderNav>
            </Router>
         </div>
    </S.Header>
)

export default Header