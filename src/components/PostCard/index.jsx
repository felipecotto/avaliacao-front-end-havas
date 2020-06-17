import React, { Children } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import * as S from "./styled"

const PostCard = (props) => (
    <S.PostCard>
        <S.PostCardTitle>{props.title}</S.PostCardTitle>
        <S.PostCardBody>{props.body}</S.PostCardBody>
        <S.PostCardLink to={props.link}>Leia Agora</S.PostCardLink>
    </S.PostCard>
)

export default PostCard