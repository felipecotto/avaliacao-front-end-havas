import React, { Component } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';

class PostDetail extends Component {
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
      <div>
        PostDetail
        <Link to="/posts">Posts</Link>
      </div>
      )
    }
  }

export default PostDetail