import React, { Component } from "react"
import API from '../../utils/ApiService';
import axios from 'axios';
import PostCard from "../../components/PostCard"

class Post extends Component {
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
        { this.state.posts.map(post => 
          <PostCard
            title={post.title}
            body={post.body}
            label="Ver Post"
            link={`/posts/${post.id}`}>
          </PostCard>
        )}
      </>
    )
  }
}

export default Post