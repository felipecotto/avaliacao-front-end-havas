import React, { Component } from "react"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from 'axios';
import * as S from "./styled";

class PostDetail extends Component {
  state = {
    posts: [], 
    title: '', 
    body: ''
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => {
        const post = res.data;
        this.setState({ title: post.title, body: post.body, });
      })
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="container">
        <S.FlexGrid>
        <S.PostDetail>
          <S.PostDetailTitle>{title}</S.PostDetailTitle>
          <S.PostDetailBody>{body}</S.PostDetailBody>
          <S.ShareSocialMedia>Compartilhe nas Redes Sociais</S.ShareSocialMedia>
          <EmailShareButton>
            <EmailIcon size={32} round={true} url="www.google.com" />
          </EmailShareButton>
          <FacebookShareButton url="www.google.com" >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </S.PostDetail>
        <S.RelatedPosts>
          <S.RelatedPostsTitle>Posts que pode gostar</S.RelatedPostsTitle>
          {this.state.posts.slice(0,4).map(post => 
            <S.RelatedPostsLinks href={`/posts/${post.id}`}>{post.title}</S.RelatedPostsLinks>
          )}
        </S.RelatedPosts>
        </S.FlexGrid>
      </div>
      )
    }
  }

export default PostDetail