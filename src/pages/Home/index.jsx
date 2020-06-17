import React, { Component } from "react";
import PostCard from '../../components/PostCard';
import Button from '../../components/Buttons'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import * as S from "./styled";

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        console.log(posts)
      })
  }
  render() {
    return (
      <>
      <S.Hero>
        <div className="container">
          <S.HehoTitle>Bem Vindo</S.HehoTitle>
          <S.HehoSubTitle>Projeto de Avaliação Front End Para havas+</S.HehoSubTitle>
        </div>
      </S.Hero>
      <div className="container">
        <S.FlexGrid>
        { this.state.posts.slice(0,3).map(post => 
          <PostCard
            title={post.title}
            body={post.body}
            link={`/posts/${post.id}`}>
          </PostCard>
        )}
        </S.FlexGrid>
      </div>
      <S.ShowPosts>
          <Link to="/posts">
            <Button label="Ver Todos"/> 
          </Link>
      </S.ShowPosts>
      </>
      )
    }
  }

export default Home