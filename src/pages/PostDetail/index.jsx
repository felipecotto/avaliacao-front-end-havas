import React, { Component } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';
import * as S from "./styled";

class PostDetail extends Component {
  state = {
    title: '', 
    body: ''
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/3`)
      .then(res => {
        const post = res.data;
        this.setState({ title: post.title, body: post.body, });
        console.log(post)
      })
    }

  render() {
    const { title, body } = this.state;
    return (
      <div className="container">
        <S.PostDetail>
          <S.PostDetailTitle>{title}</S.PostDetailTitle>
          <S.PostDetailBody>{body}</S.PostDetailBody>
        </S.PostDetail>
      </div>
      )
    }
  }

export default PostDetail