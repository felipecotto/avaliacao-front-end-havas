import React, { Component } from "react"
import axios from 'axios';
import PostCard from "../../components/PostCard"
import * as S from "./styled";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], 
      q: ''
    }

  this.filterPost = this.filterPost.bind(this);
  this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        console.log(posts)
      })
  }

  onChange(event) {
    const q = event.target.value.toLowerCase();
    this.setState({ q }, () => this.filterPost());
  }

  filterPost() {
    let posts = this.state.posts;
    let q = this.state.q;

    posts = posts.filter(function(post) {
      return post.title.indexOf(q) != -1; 
    });
    this.setState({ posts: posts });
  }

  render() {
    return (
      <div className="container">
        <S.PostsContainer>
          <S.PostsSearch>
            <S.PostsSearchTitle>Digite o post que deseja</S.PostsSearchTitle>
            <S.PostsSearchInput type="text" placeholder="Buscar" value={this.state.q} onChange={this.onChange}></S.PostsSearchInput>
          </S.PostsSearch>
            {this.state.posts.map(post => 
              <PostCard
                title={post.title}
                body={post.body}
                label="Ver Post"
                link={`/posts/${post.id}`}>
              </PostCard>
            )}
        </S.PostsContainer>
      </div>
    )
  }
}

export default Post