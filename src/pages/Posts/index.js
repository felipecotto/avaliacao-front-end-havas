import React, { Component } from "react"
import API from '../../utils/ApiService';
import axios from 'axios';

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
        { this.state.posts.map(post => 
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )}
      </>
    )
  }
}

export default Home